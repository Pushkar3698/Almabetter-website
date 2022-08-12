import React from "react";
import "../Css/WorksSection.css";
import circle from "../almabetter resoures/Circle.svg";
import Work from "./UI/Work";

const WorksSection = () => {
  return (
    <div className="work-container">
      <div className="work-main">
        <div className="work-heading">
          <h1>How AlmaBetter works</h1>
        </div>
        <div className="work-section">
          <Work
            image={circle}
            text=" Select your course, pay a refundable enrollment fee, and become a part
          of the AlmaBetter's learning journey (training + placement)"
            head="Sign up and enroll"
          />
          <Work
            image={circle}
            text=" Once you complete the training program, you sign the Income Share Agreement (ISA) and become a part of AlmaBetter’s placement program.
            Upon signing the ISA, your enrollment fee is fully refunded."
            head="Sign the ISA and get your course fee refunded"
          />
          <Work
            image={circle}
            text=" Pay the program fee in 20 equal instalments of INR 10,000 only when you land a job above 6 LPA"
            head="Land your dream job"
          />
        </div>
      </div>
    </div>
  );
};

export default WorksSection;
