import React, { useState } from "react";
import { shops } from './data';
import "./App.css";

function App() {
  const [search, setSearch] = useState("");

  // Sort alphabetically once
  const sortedShops = [...shops].sort((a, b) => a.name.localeCompare(b.name));

  // Find first shop that matches search
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
        {search && filteredShop ? (
          // Show only the first matching shop if search is not empty
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
          // Show all shops alphabetically if search is empty
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
