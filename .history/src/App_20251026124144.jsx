import React, { useState } from "react";
import { shops } from './data';
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [filteredShops, setFilteredShops] = useState(null);

  // Sort alphabetically once
  const sortedShops = [...shops].sort((a, b) => a.name.localeCompare(b.name));

  const handleSearch = () => {
    if (!search.trim()) {
      setFilteredShops(null);
      return;
    }

    // Filter all matching shops
    const result = sortedShops
      .filter(
        (shop) =>
          shop.name.toLowerCase().includes(search.toLowerCase()) ||
          shop.products.toLowerCase().includes(search.toLowerCase())
      )
      .sort((a, b) => a.name.localeCompare(b.name)); // sort alphabetically

    setFilteredShops(result);
  };

  const handleReset = () => {
    setSearch("");
    setFilteredShops(null);
  };

  const displayShops = filteredShops || sortedShops;

  return (
    <div className="container">
      <h1>Shop Directory</h1>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search shop..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-box"
        />
        <button onClick={handleSearch} className="search-btn">🔍 Search</button>
        <button onClick={handleReset} className="reset-btn">Reset</button>
      </div>

      <div className="card-column">
        {displayShops.map((shop) => (
          <div className="card" key={shop.id}>
            <h2>{shop.name}</h2>
            <p><strong>Products:</strong> {shop.products}</p>
            <p><strong>Location:</strong> {shop.location}</p>
            <p><strong>Amount:</strong> ₹{shop.amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
