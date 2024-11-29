import "modern-normalize";
import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";
import ContactForm from "./ContactForm/ContactForm";
import { useEffect, useState } from "react";

const App = () => {
  const [contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);
  const [filter, setFilter] = useState("");

  // Додамо логіку збереження в LocalStorage
  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem("contacts"));
    if (savedContacts) setContacts(savedContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <h1 style={{ margin: 15 }}>Phonebook</h1>
      <ContactForm setContacts={setContacts} contacts={contacts} />
      <SearchBox filter={filter} setFilter={setFilter} />
      <ContactList
        contacts={contacts}
        filter={filter}
        setContacts={setContacts}
      />
    </div>
  );
};

export default App;
