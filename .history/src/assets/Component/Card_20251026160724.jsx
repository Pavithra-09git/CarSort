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


import React from 'react';
import { Link } from 'react-router-dom';
import 

const Card = ({ shop, results }) => {
  return (
    <Link to={`shop/${shop.id}`} className="card-link">
      <div className="card">
        <h2 className="card-title">{shop.name}</h2>
        <p className="card-location"><strong>Location:</strong> {shop.location}</p>
        <p className="card-products">
          <strong>Products:</strong>{" "}
          {shop.products.map((p, index) => (
            <span
              key={p.name}
              className={results && shop.product && p.name === shop.product.name ? 'highlight' : ''}
            >
              {p.name}{index !== shop.products.length - 1 ? ', ' : ''}
            </span>
          ))}
        </p>
      </div>
    </Link>
  );
};

export default Card;
