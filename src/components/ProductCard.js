
import React from 'react';

const ProductCard = () => {
  return (
    <div className='col-3'>
        <div className='product-card posation-relative'>
            <div className='product-image'>
                <img src='images/products/AirPodsPro.jpg' alt='product imags' />
            </div>
            <div className='product-details'>
                <h6 className='brand'>Apple</h6>
                <h5 className="product-title">
                aesthetic video gym girl video motorcycle couple video sky.
                </h5>
            </div>
            
            <p className='price'>$100.00</p>


        </div>
    </div>
  )
}

export default ProductCard