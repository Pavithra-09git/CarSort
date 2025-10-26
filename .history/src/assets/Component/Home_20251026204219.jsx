// import React, { useState } from "react";
// import Card from "./Card";
// import { shops } from "../../data";

// const Home = () => {
//   const [search, setSearch] = useState("");
//   const [results, setResults] = useState(null);

//   const handleSearch = (e) => {
//   e.preventDefault();
//   if (!search.trim()) {
//     setResults(null);
//     return;
//   }

//   const filtered = shops
//     .map((shop) => {
//       // Find a product in this shop that matches the search
//       const product = shop.products.find(
//         (p) => p.name.toLowerCase() === search.toLowerCase().trim()
//       );

//       if (product) return { ...shop, product }; // attach matched product
//       return null;
//     })
//     .filter(Boolean)
//     .sort((a, b) => b.product.storePaidAmount - a.product.storePaidAmount); // sort by storePaidAmount

//   setResults(filtered);
// };


//   const handleReset = () => {
//     setSearch("");
//     setResults(null);
//   };

//   const displayShops = results !== null ? results : shops;

//   return (
//     <div className="container">
//       <h1>Shop Directory</h1>

//       <form className="search-form" onSubmit={handleSearch}>
//         <div className="youtube-search-box">
//           <input
//             type="text"
//             placeholder="Search product..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             className="search-input"
//           />
//           <button type="submit" className="search-button">Search</button>
//         </div>
//         <button type="button" className="reset-btn" onClick={handleReset}>
//           Reset
//         </button>
//       </form>

//       <div className="card-column">
//         {displayShops.length > 0 ? (
//           displayShops.map((shop) => (
//             <Card key={shop.id} shop={shop} results={results} />
//           ))
//         ) : (
//           <p>No shops found with that product.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Home;
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
      .map((shop) => {
        const product = shop.products.find(
          (p) => p.name.toLowerCase() === search.toLowerCase().trim()
        );
        if (product) return { ...shop, product };
        return null;
      })
      .filter(Boolean)
      .sort((a, b) => b.product.storePaidAmount - a.product.storePaidAmount);

    setResults(filtered);
  };

  const handleReset = () => {
    setSearch("");
    setResults(null);
  };

  const displayShops = results !== null ? results : shops;

  return (
    <div className="home-container">
      <h1 className="home-title">Shop Directory</h1>

      <form className="search-form" onSubmit={handleSearch}>
        <div className="search-box-wrapper">
          <input
            type="text"
            placeholder="Search product..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-button">🔍</button>
        </div>
        <button type="button" className="reset-btn" onClick={handleReset}>
          Reset
        </button>
      </form>

      <div className="cards-grid">
        {displayShops.length > 0 ? (
          displayShops.map((shop) => (
            <Card key={shop.id} shop={shop} results={results} />
          ))
        ) : (
          <p className="no-shops">No shops found with that product.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
