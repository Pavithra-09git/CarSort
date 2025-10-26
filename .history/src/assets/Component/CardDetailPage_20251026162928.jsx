// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { shops } from '../../data';

// const CardDetailPage = () => {
//   const { id } = useParams();
//   const shop = shops.find((s) => s.id === Number(id));

//   if (!shop) return <p>Shop not found</p>;

//   return (
//     <div className="card-detail-page">
//       <h1>{shop.name}</h1>
//       <p><strong>Location:</strong> {shop.location}</p>
// <p>
//   <strong>Products:</strong> {shop.products.map(p => p.name).join(", ")}
// </p>

//     </div>
//   );
// };

// export default CardDetailPage;
import React from 'react';
import { useParams } from 'react-router-dom';
import { shops } from '../../data';


// Random images array (you can replace with your own URLs)
const shopImages = [
  "https://source.unsplash.com/400x200/?store",
  "https://source.unsplash.com/400x200/?shop",
  "https://source.unsplash.com/400x200/?market",
  "https://source.unsplash.com/400x200/?stationery",
  "https://source.unsplash.com/400x200/?electronics"
];

const CardDetailPage = () => {
  const { id } = useParams();
  const shop = shops.find((s) => s.id === Number(id));

  if (!shop) return <p className="not-found">Shop not found</p>;

  // Pick a random image for this shop
  const randomImage = shopImages[Math.floor(Math.random() * shopImages.length)];

  return (
    <div className="card-detail-page">
      <img src={randomImage} alt={shop.name} className="shop-image" />
      <h1 className="shop-name">{shop.name}</h1>
      <p className="shop-location"><strong>Location:</strong> {shop.location}</p>
      <p className="shop-about"><strong>About</strong> {shop.about}</p>

      <div className="product-list">
        <h2> Our Products</h2>
        <ul>
          {shop.products.map((p, index) => (
            <li key={index}>
              {p.name} - ₹{p.normalRate}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CardDetailPage;

