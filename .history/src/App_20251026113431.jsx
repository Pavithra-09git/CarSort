import { useState } from 'react'



function App() {
  

  return (
    <>
      import React, { useState } from "react";

const ContactSearch = () => {
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
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-semibold mb-6 text-gray-800">
        Contact Directory
      </h1>

      {/* 🔍 Search Box */}
      <input
        type="text"
        placeholder="Search contacts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full max-w-md p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-8"
      />

      {/* 🧑‍🤝‍🧑 Contact Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
        {filteredContacts.map((contact) => (
          <div
            key={contact.id}
            className="bg-white shadow-md rounded-2xl p-5 hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold text-gray-800">
              {contact.name}
            </h2>
            <p className="text-gray-600 mt-2">{contact.email}</p>
            <p className="text-gray-600">{contact.phone}</p>
          </div>
        ))}
      </div>

      {/* ❌ No Results */}
      {filteredContacts.length === 0 && (
        <p className="text-gray-500 mt-10">No contacts found.</p>
      )}
    </div>
  );
};

export default ContactSearch;

    </>
  )
}

export default App
