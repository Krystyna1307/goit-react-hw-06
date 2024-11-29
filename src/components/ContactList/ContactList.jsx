import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = ({ contacts, filter, setContacts }) => {
  const handleDelete = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={s.wrapper}>
      <ul className={s.list}>
        {filteredContacts.map(({ id, name, number }) => (
          <Contact
            key={id}
            id={id}
            name={name}
            number={number}
            onDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
