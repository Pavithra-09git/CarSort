
import { shops } from "./data";
import React, { useState } from "react";
const Home = () => {
   const [search, setSearch] = useState("");
  const [results, setResults] = useState(null); // null means no search yet

  const handleSearch = (e) => {
    e.preventDefault();
    if (!search.trim()) {
      setResults(null);
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
      .sort((a, b) => b.product.storePaidAmount - a.product.storePaidAmount); // sort internally if needed

    setResults(filtered);
  };

  const handleReset = () => {
    setSearch("");
    setResults(null); // back to initial view
  };

  // Decide which shops to display: filtered or all
  const displayShops = results !== null ? results : shops;

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
        {displayShops.length > 0 ? (
          displayShops.map((shop) => (
            <div className="card" key={shop.id}>
              <h2>{shop.name}</h2>
              <p><strong>Location:</strong> {shop.location}</p>
              {results ? (
                <p><strong>Product:</strong> {shop.product.name}</p>
              ) : (
                <p><strong>Products:</strong> {shop.products.map(p => p.name).join(", ")}</p>
              )}
            </div>
          ))
        ) : (
          <p>No shops found with that product.</p>
        )}
      </div>
    </div>
  );
}

export default Home

