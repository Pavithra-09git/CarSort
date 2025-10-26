import React, { useState } from "react";
import { shops } from "./data";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!search.trim()) {
      setResults([]);
      return;
    }

    // Filter shops that have the searched product
    const filtered = shops
      .map((shop) => {
        const product = shop.products.find(
          (p) => p.name.toLowerCase() === search.toLowerCase().trim()
        );
        if (product) {
          return { ...shop, product };
        }
        return null;
      })
      .filter(Boolean)
      .sort((a, b) => b.product.storePaidAmount - a.product.storePaidAmount); // highest store paid first

    setResults(filtered);
  };

  const handleReset = () => {
    setSearch("");
    setResults([]);
  };

  return (
    <div className="container">
      <h1>Shop Directory</h1>

      <form className="search-form" onSubmit={handleSearch}>
        <div className="youtube-search-box">
          <input
            type="text"
            placeholder="Search product..."
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
        {results.length > 0 ? (
          results.map((shop) => (
            <div className="card" key={shop.id}>
              <h2>{shop.name}</h2>
              <p><strong>Location:</strong> {shop.location}</p>
              <p><strong>Product:</strong> {shop.product.name}</p>
              <p><strong>Store Paid Amount:</strong> ₹{shop.product.storePaidAmount}</p>
              <p><strong>Normal Rate:</strong> ₹{shop.product.normalRate}</p>
            </div>
          ))
        ) : (
          <p>Search for a product to see all shops sorted by store paid amount.</p>
        )}
      </div>
    </div>
  );
}

export default App;
