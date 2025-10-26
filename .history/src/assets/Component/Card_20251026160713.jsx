// import React from 'react';
// import { Link } from 'react-router-dom';

// const Card = ({ shop, results }) => {
//   return (
//     <Link to={`shop/${shop.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
//       <div className="card">
//         <h2>{shop.name}</h2>
//         <p><strong>Location:</strong> {shop.location}</p>

//         <p>
//           <strong>Products:</strong>{" "}
//           {shop.products.map(p => {
//             // Highlight the searched product if results exist
//             if (results && shop.product && p.name === shop.product.name) {
//               return <span key={p.name} style={{ fontWeight: 'bold', color: 'green' }}>{p.name}</span>;
//             } else {
//               return <span key={p.name}>{p.name}</span>;
//             }
//           }).reduce((prev, curr) => [prev, ', ', curr])}
//         </p>
//       </div>
//     </Link>
//   );
// };

// export default Card;