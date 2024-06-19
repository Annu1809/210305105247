import React from 'react'

function ProductCard({productName,price,rating,discount,availability}) {
  return (
    <div className=' bg-white w-[30rem] p-4 m-3 font-bold'>
      <h1>Product Name : {productName}</h1>
      <p>price  : {price}</p>
      <p>Rating  : {rating}</p>
      <p>Discount : {discount}</p>
      <p>Availability : {availability}</p>

    </div>
  )
}

export default ProductCard
