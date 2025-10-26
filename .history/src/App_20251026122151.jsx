import React, { useState } from "react";
import { shops } from './data';
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [filteredShop, setFilteredShop] = useState(null);

  // Sort shops alphabetically once
  const sortedShops = [...shops].sort((a, b) => a.name.localeCompare(b.name));

  // Handle search button click
  const handleSearch = () => {
    const result = sortedShops.find(
      (shop) =>
        shop.name.toLowerCase().includes(search.toLowerCase()) ||
        shop.products.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredShop(result);
  };

  // Optional: Reset search
  const handleReset = () => {
    setSearch("");
    setFilteredShop(null);
  };

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
        <button onClick={handleSearch} className="search-btn">Search</button>
        <button onClick={handleReset} className="reset-btn">Reset</button>
      </div>

      <div className="card-column">
        {filteredShop ? (
          // Show only the first matching shop after search
          <div className="card" key={filteredShop.id}>
            <h2>{filteredShop.name}</h2>
            <p><strong>Products:</strong> {filteredShop.products}</p>
            <p><strong>Location:</strong> {filteredShop.location}</p>
          </div>
        ) : (
          // Show all shops alphabetically if no search or reset
          sortedShops.map((shop) => (
            <div className="card" key={shop.id}>
              <h2>{shop.name}</h2>
              <p><strong>Products:</strong> {shop.products}</p>
              <p><strong>Location:</strong> {shop.location}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
