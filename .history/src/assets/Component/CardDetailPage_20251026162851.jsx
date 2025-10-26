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


const CardDetailPage = () => {
  const { id } = useParams();
  const shop = shops.find((s) => s.id === Number(id));

  if (!shop) return <p className="not-found">Shop not found</p>;

  return (
    <div className="card-detail-page">
      <h1>{shop.name}</h1>
      <p><strong>Location:</strong> {shop.location}</p>
      <div className="product-list">
        <strong>Products:</strong>
        <ul>
          {shop.products.map((p, index) => (
            <li key={index}>{p.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CardDetailPage;
