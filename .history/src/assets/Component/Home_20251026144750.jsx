
import React from 'react'

const Home = () => {
  return (
    <div>
      const [search, setSearch] = useState("");
  const [results, setResults] = useState(null); // nu

  const handleSearch = (e) => {
    e.preventDefault();
    if (!search.trim()) {
      setResults(null);
      return;
    }

    // Filter shops that have the searched product
    const filtered = shops
      .filter((shop) =>
        shop.products.some(
          (p) => p.name.toLowerCase() === search.toLowerCase().trim()
        )
      )
      .sort((a, b) => {
        // sort internally by storePaidAmount of searched product if it exists
        const aProduct = a.products.find(
          (p) => p.name.toLowerCase() === search.toLowerCase().trim()
        );
        const bProduct = b.products.find(
          (p) => p.name.toLowerCase() === search.toLowerCase().trim()
        );
        return bProduct.storePaidAmount - aProduct.storePaidAmount;
      });

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
              <p>
                <strong>Products:</strong>{" "}
                {shop.products.map((p) => p.name).join(", ")}
              </p>
            </div>
          ))
        ) : (
          <p>No shops found with that product.</p>
        )}
      </div>
    </div>
    </div>
  )
}

export default Home

