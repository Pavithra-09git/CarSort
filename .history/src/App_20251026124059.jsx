import React, { useState } from "react";
import { shops } from './data';
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [filteredShop, setFilteredShop] = useState(null);

  // Sort alphabetically once
  const sortedShops = [...shops].sort((a, b) => a.name.localeCompare(b.name));

  const handleSearch = () => {
    if (!search.trim()) {
      // If search box is empty, don't filter
      setFilteredShop(null);
      return;
    }

    // Find first matching shop
    const result = sortedShops.find(
      (shop) =>
        shop.name.toLowerCase().includes(search.toLowerCase()) ||
        shop.products.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredShop(result);
  };

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
        <button onClick={handleSearch} className="search-btn">🔍 Search</button>
        <button onClick={handleReset} className="reset-btn">Reset</button>
      </div>

      <div className="card-column">
        {filteredShop ? (
          <div className="card" key={filteredShop.id}>
            <h2>{filteredShop.name}</h2>
            <p><strong>Products:</strong> {filteredShop.products}</p>
            <p><strong>Location:</strong> {filteredShop.location}</p>
            <p><strong>Amount:</strong> ₹{filteredShop.amount}</p>
          </div>
        ) : (
          // Show all shops if no search or empty input
          sortedShops.map((shop) => (
            <div className="card" key={shop.id}>
              <h2>{shop.name}</h2>
              <p><strong>Products:</strong> {shop.products}</p>
              <p><strong>Location:</strong> {shop.location}</p>
              <p><strong>Amount:</strong> ₹{shop.amount}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
