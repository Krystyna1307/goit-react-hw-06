import React from "react";
import s from "./SearchBox.module.css";

const SearchBox = ({ filter, setFilter }) => {
  return (
    <div className={s.wrapper}>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
