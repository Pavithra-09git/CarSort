import React, { useState } from "react";
import { shops } from './data';
import "./App.css";

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [search, setSearch] = useState("");
  const [filteredShop, setFilteredShop] = useState(null);

  const sortedShops = [...shops].sort((a, b) => a.name.localeCompare(b.name));

  const handleSearch = () => {
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
          re
        />
        <button onClick={handleSearch} className="search-btn">
          <FontAwesomeIcon icon={faMagnifyingGlass} /> Search
        </button>
        <button onClick={handleReset} className="reset-btn">Reset</button>
      </div>

      <div className="card-column">
        {filteredShop ? (
          <div className="card" key={filteredShop.id}>
            <h2>{filteredShop.name}</h2>
            <p><strong>Products:</strong> {filteredShop.products}</p>
            <p><strong>Location:</strong> {filteredShop.location}</p>
          </div>
        ) : (
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
