import React, { useState } from "react";

const Searchbar = ({ data }) => {
  const [input, setInput] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const handleChange = (e) => {
    e.preventDefault();
    // setInput(e.target.value);
    const newFilter = data.filter((item) => {
      return item.name.toLowerCase().includes(input.toLowerCase());
    });
    if (input == "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  return (
    <div>
      <form onSubmit={handleChange}>
        <input
          type="text"
          placeholder="Enter keyword"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">search</button>
      </form>
      {input.length != 0 && (
        <div>
          {filteredData.map((item) => (
            <p key={item.id}>{item.name}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Searchbar;
