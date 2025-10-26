import React from 'react';
import { Link } from 'react-router-dom'; // make sure you have react-router-dom installed

const Card = ({ shop, results }) => {
  return (
    <Link to={`/shop/${shop.id}`}> {/* or any path you want */}
      <div className="card">
        <h2>{shop.name}</h2>
        <p><strong>Location:</strong> {shop.location}</p>
        {results ? (
          <p><strong>Product:</strong> {shop.product.name}</p>
        ) : (
          <p><strong>Products:</strong> {shop.products.map(p => p.name).join(", ")}</p>
        )}
      </div>
    </Link>
  );
};

export default Card;
