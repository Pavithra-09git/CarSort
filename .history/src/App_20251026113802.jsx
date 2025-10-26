import React, { useState } from "react";
import "./App.css"; 

function App() {
  const [search, setSearch] = useState("");

  const contacts = [
    { id: 1, name: "Vignesh Kumar", email: "vignesh@example.com", phone: "9876543210" },
    { id: 2, name: "Pavithra Raj", email: "pavithra@example.com", phone: "9876543211" },
    { id: 3, name: "Arjun R", email: "arjun@example.com", phone: "9876543212" },
    { id: 4, name: "Kaviya M", email: "kaviya@example.com", phone: "9876543213" },
  ];

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Contact Directory</h1>

      <input
        type="text"
        placeholder="Search contacts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-box"
      />

      <div className="card-container">
        {filteredContacts.length > 0 ? (
          filteredContacts.map((contact) => (
            <div className="card" key={contact.id}>
              <h2>{contact.name}</h2>
              <p>{contact.email}</p>
              <p>{contact.phone}</p>
            </div>
          ))
        ) : (
          <p className="no-result">No contacts found.</p>
        )}
      </div>
    </div>
  );
}

export default App;
