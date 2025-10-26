import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ shop }) => {
  return (
    <Link 
      to={`shop/${shop.id}`}  
      style={{ textDecoration: 'none', color: 'inherit' }} 
      className="card-link"
    >
      <div className="card">
        <h2 className="card-title">{shop.name}</h2>
        <p className="card-location"><strong>Location:</strong> {shop.location}</p>
        <p className="card-products">
          <strong>Products:</strong>{" "}
          {shop.products.map((p, index) => (
            <span key={p.name}>
              {p.name}{index !== shop.products.length - 1 ? ', ' : ''}
            </span>
          ))}
        </p>
      </div>
    </Link>
  );
};

export default Card;
