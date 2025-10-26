import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ shop, results }) => {
  return (
    <Link to={`shop/${shop.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className="card">
        <h2>{shop.name}</h2>
        <p><strong>Location:</strong> {shop.location}</p>
        {results ? (
          // If you stored the matched product in results
          <p><strong>Product:</strong> {shop.product}</p>
        ) : (
          // products are strings, so just join them
          <p><strong>Products:</strong> {shop.products.join(", ")}</p>
        )}
      </div>
    </Link>
  );
};

export default Card;
