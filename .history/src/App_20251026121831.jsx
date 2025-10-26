import React, { useState } from "react";
import { shops } from './data';
import "./App.css";

function App() {
  const [search, setSearch] = useState("");

  // Sort alphabetically
  const sortedShops = [...shops].sort((a, b) => a.name.localeCompare(b.name));

  // Find first shop matching the search
  const filteredShop = sortedShops.find(
    (shop) =>
      shop.name.toLowerCase().includes(search.toLowerCase()) ||
      shop.products.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Shop Directory</h1>

      <input
        type="text"
        placeholder="Search shop..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-box"
      />

      <div className="card-column">
        {filteredShop ? (
          <div className="card" key={filteredShop.id}>
            <h2>{filteredShop.name}</h2>
            <p>
              <strong>Products:</strong> {filteredShop.products}
            </p>
            <p>
              <strong>Location:</strong> {filteredShop.location}
            </p>
          </div>
        ) : (
          // If nothing matches, show all shops
          sortedShops.map((shop) => (
            <div className="card" key={shop.id}>
              <h2>{shop.name}</h2>
              <p>
                <strong>Products:</strong> {shop.products}
              </p>
              <p>
                <strong>Location:</strong> {shop.location}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
