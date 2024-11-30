import { useDispatch } from "react-redux";
import React from "react";
import s from "./Contact.module.css";
import { removeContact } from "../../redux/contactsSlice.js";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <li className={s.item}>
      <div className={s.contact}>
        <span>{name}</span>
        <span>{number}</span>
      </div>

      <button onClick={() => dispatch(removeContact(id))}>Delete</button>
    </li>
  );
};

export default Contact;
