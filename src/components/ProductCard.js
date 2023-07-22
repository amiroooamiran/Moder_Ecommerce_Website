import ReactStars from "react-rating-stars-component";
import React from 'react';
import { Link } from "react-router-dom";

const ProductCard = () => {
  return (
    <div className='col-3'>
        <div className='product-card position-relative'>
            <div className='product-image'>
                <img src='images/products/AirPodsPro.jpg' alt='product imags' />
            </div>
            <div className='product-details'>
                <h6 className='brand'>Apple</h6>
                <h5 className="product-title">
                aesthetic video gym girl video motorcycle couple video sky.
                </h5>
                <ReactStars count={5} size={24} activeColor="#ffd700"/>
                <p className='price'>$100.00</p>
            </div>

            <div className="action-bar position-absolute">
                <div className="d-flex flex-column">
                    <Link>
                    <i class="uil uil-eye"></i>
                    </Link>
                    <Link>
                        <i class="uil uil-share-alt"></i>
                    </Link>
                    <Link>
                        <i class="uil uil-shopping-bag"></i>
                    </Link>
                </div>
            </div>
            

           

        </div>
    </div>
  )
}

export default ProductCard