import { ACTIONTYPE } from "./Reducer";

export const FirstFilter = (array) => {
  return {
    type: ACTIONTYPE.firstFilter,
    payload: array,
  };
};

export const NextPage = (page) => {
  return {
    type: ACTIONTYPE.nextPage,
    payload: page,
  };
};

export const PrevPage = (page) => {
  return {
    type: ACTIONTYPE.prevPage,
    payload: page,
  };
};
