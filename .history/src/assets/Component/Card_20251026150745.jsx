import React from 'react'
import {Link} from 'react'
const Card = ({shop,results}) => {
  return (
     <Link>
         <div className="card" >
              <h2>{shop.name}</h2>
              <p><strong>Location:</strong> {shop.location}</p>
              {results ? (
                <p><strong>Product:</strong> {shop.product.name}</p>
              ) : (
                <p><strong>Products:</strong> {shop.products.map(p => p.name).join(", ")}</p>
              )}
            </div>
      </Link>
   
  )
}

export default Card;
