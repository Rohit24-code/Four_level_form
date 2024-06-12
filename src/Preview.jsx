import React from "react";

const Preview = ({ title, data }) => {
  return (
    <div style={{ borderLeft: "1px solid black", flex: 1 }}>
      <div>{title}</div>
      <div>
        {data?.map((procedure, index) => {
          return (
            <div>
              <div key={index} className="ps-4">{index + 1}. {procedure?.value}</div>
              <div className="ps-5">
                {procedure?.subHeading?.map((subHeading, subIndex) => {
                  return (
                    <div>
                      <div>{subHeading?.value}</div>
                      <div className="ps-4">
                        {subHeading?.firstLevel?.map((firstLevel, firstIndex) => {
                          return (
                            <div>
                              <div>{firstLevel?.value}</div>
                              <div className="ps-4">
                              {firstLevel?.secondLevel?.map((secondLevel, secondIndex) => {
                                return (
                                  <div>
                                    <div>{secondLevel?.value}</div>
                                  </div>
                                );
                              })}
                              </div>
                              
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Preview;
