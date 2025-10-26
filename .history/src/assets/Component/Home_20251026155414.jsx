import React, { useState } from "react";
import Card from "./Card";
import { shops } from "../../data";

const Home = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!search.trim()) {
      setResults(null);
      return;
    }

    const filtered = shops
      .filter((shop) =>
        shop.products.some((p) => p.toLowerCase() === search.toLowerCase().trim())
      )
      // Sort by some amount if you have a "storePaidAmount" field
      //.sort((a, b) => b.storePaidAmount - a.storePaidAmount)
      ;

    setResults(filtered);
  };

  const handleReset = () => {
    setSearch("");
    setResults(null);
  };

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
            <Card key={shop.id} shop={shop} results={results} />
          ))
        ) : (
          <p>No shops found with that product.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
