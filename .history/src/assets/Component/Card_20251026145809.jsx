import React from 'react'

const Card = ({shop}) => {
  return (
    <div>
         <div className="card" key={shop.id}>
              <h2>{shop.name}</h2>
              <p><strong>Location:</strong> {shop.location}</p>
              {results ? (
                <p><strong>Product:</strong> {shop.product.name}</p>
              ) : (
                <p><strong>Products:</strong> {shop.products.map(p => p.name).join(", ")}</p>
              )}
            </div>
      
    </div>
  )
}

export default Card
