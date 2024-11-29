import React from "react";
import s from "./Contact.module.css";

const Contact = ({ id, name, number, onDelete }) => {
  return (
    <li className={s.item}>
      <div className={s.contact}>
        <span>{name}</span>
        <span>{number}</span>
      </div>

      <button onClick={() => onDelete(id)}>Delete</button>
    </li>
  );
};

export default Contact;
