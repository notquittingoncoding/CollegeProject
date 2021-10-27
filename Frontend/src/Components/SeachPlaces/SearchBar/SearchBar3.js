import React, { useState, useEffect } from "react";

const SearchBar3 = ({ name, placeholder, data, setValue, val }) => {

  const [input, setInput] = useState("");
  const [filterData, setFilterData] = useState([]);

  const handleFilter = (event) => {
    setInput(event.target.value);
    const searchWord = event.target.value;

    const newFilter = data.filter((elem) => {
      return elem.user.toLowerCase().includes(searchWord.toLowerCase());
    });
    console.log(newFilter);
    if (searchWord === "") {
      setFilterData([]);
    } else {
      setFilterData(newFilter);
    }
  };

  const deleteItem = () => {
    setInput("");
    setValue("");
    setFilterData([]);
  };
  const handleInput = (value) => {
    setInput(value);
    setValue(value);
    setFilterData([]);
  };
  return (
    <>
      <div>
        <input
          type="text"
          placeholder={placeholder}
          name={name}
          value={input}
          onChange={handleFilter}
        />
        {input !== "" && (
          <i
            className="fas fa-times"
            onClick={deleteItem}
            style={{
              position: "absolute",
              right: "3%",
              top: "30%",
            }}
          ></i>
        )}
      </div>
      {input !== "" && filterData.length > 0 && (
        <div className="dataresult">
          {filterData.map((elem) => {
            return (
              <div
                className="dataItem"
                onClick={() => {
                  handleInput(elem.user);
                }}
              >
                <p>{elem.user}</p>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default SearchBar3;
