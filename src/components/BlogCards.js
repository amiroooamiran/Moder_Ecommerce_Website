import React, { useState } from 'react'
import { Link } from 'react-router-dom'



const BlogCards = (props) => {

    const {image, date, title, desc} = props.blogs;
    return (  
        <div className='col-3'>
            <div className='blog-card'>
                <div className='card-image'>
                    <img src={image} alt="blog" />
                </div>
                <div className='blog-content'>
                    <p className='date'>{date}</p>
                    <h4 className='title'>{title}</h4>
                    <p className='desc'>{desc}</p>
                    <Link to="/" className='button'>Read More</Link>
                </div>
            </div>
        </div>
    );
}


export default BlogCards