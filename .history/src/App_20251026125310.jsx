import React, { useState } from "react";
import { shops } from "./data";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [filteredShops, setFilteredShops] = useState(null);

  const sortedShops = [...shops].sort((a, b) =>
    a.name.trim().toLowerCase().localeCompare(b.name.trim().toLowerCase())
  );

  const handleSearch = (e) => {
    e.preventDefault(); // prevent page reload
    if (!search.trim()) {
      setFilteredShops(null);
      return;
    }

    const result = sortedShops
      .filter(
        (shop) =>
          shop.name.toLowerCase().includes(search.toLowerCase().trim()) ||
          shop.products.toLowerCase().includes(search.toLowerCase().trim())
      )
      .sort((a, b) =>
        a.name.trim().toLowerCase().localeCompare(b.name.trim().toLowerCase())
      );

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

      <form className="search-form" onSubmit={handleSearch}>
        <div className="youtube-search-box">
          <input
            type="text"
            placeholder="Search shop..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-button">Search</button>
        </div>
        <button type="button" className="reset-btn" onClick={handleReset}>
          Reset
        </button>
      </form>

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
