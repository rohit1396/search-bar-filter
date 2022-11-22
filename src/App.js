import React, { useEffect, useState } from "react";
import "./App.css";
import Searchbar from "./Searchbar";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const actualData = await res.json();
      setData(actualData);
    };
    getUsers();
  }, []);
  console.log(data);

  return (
    <div className="App">
      <h1>Welcome to search filter</h1>
      <Searchbar data={data} />
    </div>
  );
}

export default App;
