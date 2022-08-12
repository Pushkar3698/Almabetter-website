const IntitialState = {
  icons: [],
  filteredIcons: [],
  page: 0,
};

export const ACTIONTYPE = {
  nextPage: "NEXT",
  prevPage: "PREV",
  firstFilter: "FILTER",
};

const filter = (arr, count) => {
  let start = 12 * count;
  let end = 12 * (count + 1);
  let array = arr.slice(start, end);
  return array;
};

export const Reducer = (state = IntitialState, actions) => {
  if (actions.type === ACTIONTYPE.nextPage) {
    if (actions.payload > Math.floor(state.icons.length / 10) - 1) {
      return { ...state };
    } else {
      let filteredArr = filter(state.icons, actions.payload);

      return {
        ...state,
        filteredIcons: filteredArr,
        page: actions.payload,
      };
    }
  }

  if (actions.type === ACTIONTYPE.prevPage) {
    if (actions.payload < 0) {
      return { ...state };
    } else {
      let filteredArr = filter(state.icons, actions.payload);

      return {
        ...state,
        filteredIcons: filteredArr,
        page: actions.payload,
      };
    }
  }

  if (actions.type === ACTIONTYPE.firstFilter) {
    let filteredArr = filter(actions.payload, state.page);

    return {
      icons: actions.payload,
      filteredIcons: filteredArr,
      page: state.page,
    };
  }

  return state;
};
