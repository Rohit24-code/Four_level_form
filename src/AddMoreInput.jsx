import React from "react";

const AddMoreInput = ({
  data,
  isTitleInput,
  title,
  setTitle,
  setIsTitleInput,
  setData,
}) => {
  const handleAddProcedure = () => {
    let newData = JSON.parse(JSON.stringify(data));
    newData.push({ key: "procedure", value: "", subHeading: [] });
    setData([...newData]);
  };

  const handleAddSubHeading = (index) => {
    let newData = JSON.parse(JSON.stringify(data));
    newData[index]?.subHeading?.push({ key: "sub", value: "", firstLevel: [] });
    setData([...newData]);
  };

  const handleAddFirstLevel = (index, subIndex) => {
    let newData = JSON.parse(JSON.stringify(data));
    newData[index]?.subHeading[subIndex]?.firstLevel?.push({
      key: "firstLevel",
      value: "",
      secondLevel: [],
    });
    setData([...newData]);
  };

  const handleAddSecondLevel = (index, subIndex, firstIndex) => {
    let newData = JSON.parse(JSON.stringify(data));
    console.log(
      newData[index]?.subHeading[subIndex]?.firstLevel[firstIndex],
      "newData[index]?.subHeading[subIndex]?.firstLevel[firstIndex]"
    );
    newData[index]?.subHeading[subIndex]?.firstLevel[
      firstIndex
    ]?.secondLevel?.push({
      key: "secondLevel",
      value: "",
    });
    setData([...newData]);
  };

  const handleChange = (e, key) => {
    let newData = JSON.parse(JSON.stringify(data));
    newData[key] = {
      key: "procedure",
      value: e?.target?.value,
      subHeading: newData[key]?.subHeading ? newData[key]?.subHeading : [],
    };
    setData([...newData]);
  };

  const handleSubChange = (e, index, subIndex) => {
    let newData = JSON.parse(JSON.stringify(data));
    // console.log(newData[index].subHeading[subIndex],"newData[index].subHeading",subIndex)
    newData[index].subHeading[subIndex] = {
      key: "sub",
      value: e?.target?.value,
      firstLevel: newData[index]?.subHeading[subIndex]?.firstLevel
        ? newData[index]?.subHeading[subIndex]?.firstLevel
        : [],
    };
    setData([...newData]);
  };

  const handleFirstLevelChange = (e, index, subIndex, firstIndex) => {
    let newData = JSON.parse(JSON.stringify(data));
    newData[index].subHeading[subIndex].firstLevel[firstIndex] = {
      key: "firstLevel",
      value: e?.target?.value,
      secondLevel: newData[index]?.subHeading[subIndex]?.firstLevel[firstIndex]
        ?.secondLevel
        ? newData[index]?.subHeading[subIndex]?.firstLevel[firstIndex]
            ?.secondLevel
        : [],
    };
    setData([...newData]);
  };

  const handleSubDelete = (index, subIndex) => {
    let newData = JSON.parse(JSON.stringify(data));
    newData[index]?.subHeading?.splice(subIndex, 1);
    setData([...newData]);
  };

  const handleFirstLevelDelete = (index, subIndex, firstIndex) => {
    let newData = JSON.parse(JSON.stringify(data));
    newData[index]?.subHeading[subIndex]?.firstLevel?.splice(firstIndex, 1);
    setData([...newData]);
  };

  const handleSecondLevelDelete = (
    index,
    subIndex,
    firstIndex,
    secondIndex
  ) => {
    let newData = JSON.parse(JSON.stringify(data));
    newData[index]?.subHeading[subIndex]?.firstLevel[
      firstIndex
    ]?.secondLevel?.splice(secondIndex, 1);
    setData([...newData]);
  };

  const handleSecondLevelChange = (
    e,
    index,
    subIndex,
    firstIndex,
    secondIndex
  ) => {
    let newData = JSON.parse(JSON.stringify(data));
    newData[index].subHeading[subIndex].firstLevel[firstIndex].secondLevel[
      secondIndex
    ] = {
      key: "secondLevel",
      value: e?.target?.value,
    };
    setData([...newData]);
  };

  const handleProcedureDelete = (key) => {
    let newData = JSON.parse(JSON.stringify(data));
    newData?.splice(key, 1);
    setData([...newData]);
  };
  return (
    <div style={{ flex: 2 }}>
      {/* //title  */}

      <div className="ml-2 pt-2">
        <div>Title</div>
        {
          <div className="d-flex" style={{gap:"5px"}}>
            {" "}
            <input
              type="text"
              className="form-control"
              onChange={(e) => setTitle(e.target.value)}
            />{" "}
            <button className="btn btn-success w-50" onClick={() => handleAddProcedure()}>Add Procedure</button>
          </div>
        }
      </div>

      {/* Procedure  */}
      <div className="ps-4 pb-4">
        <div className="mt-2 mb-2">Procedure</div>
        {data?.map((item, index) => {
          return (
            <div className="mb-2 mt-2">
              <div className="d-flex" style={{gap:"5px"}}>
              <input
                type="text"
                className="form-control"
                value={item?.value}
                onChange={(e) => handleChange(e, index)}
              />{" "}
              <button className="btn btn-danger" onClick={() => handleProcedureDelete(index)}>
                Delete
              </button>{" "}
              <button className="btn btn-success w-50" onClick={() => handleAddSubHeading(index)}>
                Add SubHeading
              </button>
              </div>
              
              {/* subHeading  */}
              <div className="ps-3">
                <div className="pt-1 pb-1">SubHeading</div>
                {item?.subHeading?.map((sub, subIndex) => {
                  return (
                    <div className="pt-3">
                      <div className="d-flex" style={{gap:"5px"}}>
                      <input
                        type="text"
                        className="form-control"
                        value={sub?.value}
                        onChange={(e) => handleSubChange(e, index, subIndex)}
                      />{" "}
                      <button className="btn btn-danger" onClick={() => handleSubDelete(index, subIndex)}>
                        Delete
                      </button>{" "}
                      <button
                        className="btn btn-success w-50"
                        onClick={() => handleAddFirstLevel(index, subIndex)}
                      >
                        Add Level One
                      </button>
                      </div>
                      
                      {/* first Level  */}
                      <div className="ps-3">
                        <div>First Level</div>
                        {sub?.firstLevel?.map((first, firstIndex) => {
                          return (
                            <div className="pt-3">
                             <div className="d-flex" style={{gap:"5px"}}>
                             <input
                                className="form-control"
                                type="text"
                                value={first?.value}
                                onChange={(e) =>
                                  handleFirstLevelChange(
                                    e,
                                    index,
                                    subIndex,
                                    firstIndex
                                  )
                                }
                              />{" "}
                              <button
                               className="btn btn-danger"
                                onClick={() =>
                                  handleFirstLevelDelete(
                                    index,
                                    subIndex,
                                    firstIndex
                                  )
                                }
                              >
                                Delete
                              </button>{" "}
                              <button
                                className="btn btn-success w-50"
                                onClick={() =>
                                  handleAddSecondLevel(
                                    index,
                                    subIndex,
                                    firstIndex
                                  )
                                }
                              >
                                Add Level Two
                              </button>
                             </div>
                              {/* second level  */}
                              <div className="ps-3">
                                <div>Second Level</div>
                                {first?.secondLevel?.map(
                                  (second, secondIndex) => {
                                    return (
                                      <div className="mt-3">
                                        <div className="d-flex" style={{gap:"5px"}}>
                                        <input
                                          type="text"
                                          className="form-control"
                                          value={second?.value}
                                          onChange={(e) =>
                                            handleSecondLevelChange(
                                              e,
                                              index,
                                              subIndex,
                                              firstIndex,
                                              secondIndex
                                            )
                                          }
                                        />{" "}
                                        <button
                                         className="btn btn-danger"
                                          onClick={() =>
                                            handleSecondLevelDelete(
                                              index,
                                              subIndex,
                                              firstIndex,
                                              secondIndex
                                            )
                                          }
                                        >
                                          Delete
                                        </button>
                                        </div>
                                      </div>
                                    );
                                  }
                                )}
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

export default AddMoreInput;
