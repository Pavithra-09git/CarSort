import React, { useState } from "react";
import data from '.'
import "./App.css";

function App() {
  const [search, setSearch] = useState("");



  // Sort alphabetically
  const sortedShops = [...shops].sort((a, b) => a.name.localeCompare(b.name));

  // Filter by search input
  const filteredShops = sortedShops.filter((shop) =>
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
        {filteredShops.length > 0 ? (
          filteredShops.map((shop) => (
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
        ) : (
          <p className="no-result">No shops found.</p>
        )}
      </div>
    </div>
  );
}

export default App;
