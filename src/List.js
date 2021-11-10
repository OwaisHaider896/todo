import React from "react";

const List = ({ list }) => {
  return (
    <ul>
      {list.map((name) => (
        <li>{name}</li>
      ))}
    </ul>
  );
};

export default List;
