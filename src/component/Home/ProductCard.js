import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faStar } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
// import AddWishlistHook from '../../hook/user/AddWishlistHook';



const ProductCard = ({image ,productId,title ,mediumPrice,description , favProd ,reloaded}) => {

  
  // const  [removeToWishListData, addToWishListData, handelFav, favImg] =AddWishlistHook(productId,favProd)

 
  return (
    <div dir='rtl' className="product-card mb-1">
    <div className="product-card-image">
    <Link onClick={!reloaded ?()=>window.scrollTo({ top: 0, behavior: 'smooth' }) :reloaded} to={`/products/${productId}`}>
        <img src={image} alt="img" />
    </Link>
    </div>
    <div className="product-title mt-5">
    <Link onClick={!reloaded ?()=>window.scrollTo({ top: 0, behavior: 'smooth' }) :reloaded} to={`/products/${productId}`}>
      <h4>{title}</h4>
      </Link>
      <h4> جنية {mediumPrice} </h4>
    </div>
    <div className="product-rating d-flex justify-content-between mt-2 mb-4">
    <div><FontAwesomeIcon icon={faStar}/>{5}</div>

    {/* <div><img onClick={handelFav} src={favImg} style={{width:"40px",cursor:"pointer"}} alt="" /></div> */}

    </div>
    <div className="product-desc">
      <p>{description}</p>
    </div>
    <div className="order-now-btn mt-4 mb-3">
      <Link onClick={!reloaded ?()=>window.scrollTo({ top: 0, behavior: 'smooth' }) :reloaded} to={`/products/${productId}`}>اطلب الأن</Link>
    </div>
  </div>
  )
}

export default ProductCard
