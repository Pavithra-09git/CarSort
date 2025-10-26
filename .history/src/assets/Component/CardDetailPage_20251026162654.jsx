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
      <h1 className="shop-name">{shop.name}</h1>
      <p className="shop-location"><strong>Location:</strong> {shop.location}</p>
      <p className="shop-about"><strong>About:</strong> {shop.about}</p>

      <div className="product-list">
        <h2>Products</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Normal Rate</th>
              <th>Customer Feedback</th>
            </tr>
          </thead>
          <tbody>
            {shop.products.map((p, index) => (
              <tr key={index}>
                <td>{p.name}</td>
                <td>{p.normalRate}</td>
                <td>{p.feedback ? p.feedback : "No feedback yet"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CardDetailPage;

