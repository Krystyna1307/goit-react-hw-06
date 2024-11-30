import React from "react";
import s from "./SearchBox.module.css";

const SearchBox = () => {
  return (
    <div className={s.wrapper}>
      <p>Find contacts by name</p>
      <input type="text" onChange={(e) => {}} />
    </div>
  );
};

export default SearchBox;
