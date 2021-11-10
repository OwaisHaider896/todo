import React, { useState } from "react";
import "./styles.css";
import List from "./List";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState([]);

  const handleSubmit = () => {
    setList([...list, inputValue]);
    setInputValue("");
  };

  return (
    <>
      <div className="App">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          placeholder="Todo List"
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <List list={list} />
    </>
  );
}
