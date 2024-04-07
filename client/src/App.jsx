import Navbar from "./Navbar";
import CreateContact from "./CreateContact";
import Contacts from "./Contacts";
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";
import axios from "axios";
import EditContact from "./EditContact";

export default function App() {
  const [contact, setContact] = useState({
    name: "",
    desc: "",
    number: "",
    _id: "",
  });
  const [contacts, setContacts] = useState([
    { name: "", desc: "", number: "", _id: "" },
  ]);
  const [isEdited, setIsEdited] = useState(false);
  const [editedContact, setEditedContact] = useState({
    name: "",
    desc: "",
    number: "",
    _id: "",
  });

  const createHandler = e => {
    const { name, value } = e.target;
    setContact(prev => {
      return { ...prev, [name]: value };
    });
  };

  const createContact = e => {
    e.preventDefault();
    const { name, desc, number } = contact;
    const newContact = { name, desc, number };
    axios.post("http://localhost:5000/new-contact", newContact);
    toast.success("Contact was added successfully");
    setContact({ name: "", desc: "", number: "" });
  };

  const editHandler = e => {
    const { name, value } = e.target;
    setEditedContact(prev => {
      return { ...prev, [name]: value };
    });
  }

  const editContactHandler = id => {
    setIsEdited(true);
    setEditedContact(prev => {
      return { ...prev, id };
    });
  };

  const editContact = id => {
    axios.put(`http://localhost:5000/put/${id}`, editedContact);
    toast.update("Contact was updated successfully");
  };

  const deleteContact = id => {
    axios.delete(`http://localhost:5000/delete/${id}`);
    toast.error("Contact was deleted successfully");
  };

  useEffect(() => {
    // const getContacts = async () => {
    //   try {
    //     const res = await fetch("http://localhost:5000/contacts");
    //     const data = await res.json();
    //     setContacts(data);
    //   } catch (err) {
    //     console.error(err);
    //   }
    // };

    fetch("http://localhost:5000/contacts")
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      })
      .then(data => setContacts(data))
      .catch(err => console.error(err));

    // getContacts();
  }, []);

  return (
    <div className="container">
      <Navbar />
      <ToastContainer />
      {isEdited ? (
        <EditContact
          editedContact={editedContact}
          editHandler={editHandler}
          editContact={editContact}
        />
      ) : (
        <CreateContact
          contact={contact}
          createHandler={createHandler}
          createContact={createContact}
        />
      )}

      <Contacts
        contacts={contacts}
        editContactHandler={editContactHandler}
        deleteContact={deleteContact}
      />
    </div>
  );
}
