import React from 'react';
import { useParams } from 'react-router-dom';
import { shops } from './data';

const CardDetailPage = () => {
  const { cardId } = useParams(); // cardId is a string
  const shop = shops.find((s) => s.id === NumcardId); // convert id to string

  if (!shop) {
    return <p>Shop not found</p>;
  }

  return (
    <div className="card-detail-page">
      <h1>{shop.name}</h1>
      <p><strong>Location:</strong> {shop.location}</p>
      <p>
        <strong>Products:</strong>{" "}
        {shop.products.map((p) => p.name).join(", ")}
      </p>
    </div>
  );
};

export default CardDetailPage;

