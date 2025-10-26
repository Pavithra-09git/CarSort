import React, { useState } from "react";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");

  // Sample shops data
  const shops = [
    {
      id: 1,
      name: "Alpha Stationery",
      category: "Stationery",
      products: "Pens, Notebooks, Folders, Markers",
      location: "Coimbatore",
    },
    {
      id: 2,
      name: "Eco Paper House",
      category: "Stationery",
      products: "Recycled Paper, Diaries, Files",
      location: "Chennai",
    },
    {
      id: 3,
      name: "Bright Tech",
      category: "Electronics",
      products: "Laptops, Keyboards, Headphones",
      location: "Madurai",
    },
    {
      id: 4,
      name: "Daily Needs Mart",
      category: "Grocery",
      products: "Groceries, Cleaning Items, Snacks",
      location: "Salem",
    },
    {
      id: 5,
      name: "Creative Prints",
      category: "Stationery",
      products: "Posters, Visiting Cards, Brochures",
      location: "Trichy",
    },
    {
      id: 6,
      name: "Smart Gadgets Hub",
      category: "Electronics",
      products: "Smartphones, Chargers, Speakers",
      location: "Coimbatore",
    },
  ];

  // Sort alphabetically
  const sortedShops = [...shops].sort((a, b) => a.name.localeCompare(b.name));

  // Filter by search
  const filteredShops = sortedShops.filter((shop) =>
    shop.name.toLowerCase().includes(search.toLowerCase())
  );

  // Group by category
  const grouped = filteredShops.reduce((groups, shop) => {
    const { category } = shop;
    if (!groups[category]) groups[category] = [];
    groups[category].push(shop);
    return groups;
  }, {});

  return (
    <div className="container">
      <h1>Shop Comparison Directory</h1>

      <input
        type="text"
        placeholder="Search shop..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-box"
      />

      {/* Loop through each category */}
      {Object.keys(grouped).map((category) => (
        <div key={category} className="category-section">
          <h2 className="category-title">{category} Shops</h2>
          <div className="card-row">
            {grouped[category].map((shop) => (
              <div className="card" key={shop.id}>
                <h3>{shop.name}</h3>
                <p>
                  <strong>Products:</strong> {shop.products}
                </p>
                <p>
                  <strong>Location:</strong> {shop.location}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}

      {filteredShops.length === 0 && (
        <p className="no-result">No shops found.</p>
      )}
    </div>
  );
}

export default App;
