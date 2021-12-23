import { FC } from "react";
import config from "../../config";

const Skills: FC = () => {
  return (
    <>
      {config.recentSkills.map((name) => (
        <div className="progress_inner" key={name}>
          <span className="label">{name}</span>
          {/* <div className="background">
            <div className="bar">
              <div
                className="bar_in"
                style={{ width: val.skillPercent + "%" }}
              ></div>
            </div>
          </div> */}
        </div>
      ))}
    </>
  );
};

export default Skills;
