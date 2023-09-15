import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong, faStar } from '@fortawesome/free-solid-svg-icons'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import GetHomeProducts from '../../hook/products/GetHomeProducts';
// import GetWishlistHook from '../../hook/user/GetWishlistHook';

const Products = ({title,reloaded}) => {
  const [items]=GetHomeProducts()
  // const [favProd]=GetWishlistHook()
  return (
   <>
   <div  className="products-head mb-5  mt-5">
    <div className="container">
        <h4>أطباقنا</h4>
       <div className='d-flex align-items-center justify-content-end'>
       <Link onClick={()=>window.scrollTo({ top: 0, behavior: 'smooth' })} to="/products">  <FontAwesomeIcon className='me-3' icon={faArrowLeftLong} />المزيد</Link>
       <h1 className='d-inline ms-4'>{title || "تصفح قائمتنا"}</h1>
       </div>
    </div>
   </div>
   <div  className="products-body mt-3">
    <div className="container">
    <Swiper
        slidesPerView={3}
        spaceBetween={40}
        breakpoints={{
          240: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        navigation={true}
        modules={[ Navigation]}
        className="mySwiper"
      > 
         {
          items ? 
          items.map((product,i)=>
            
              <SwiperSlide key={i}>
          <ProductCard reloaded={reloaded} productId={product.id} image={product.image}
           title={product.name} description={product.description}
            smallPrice={product.smallPrice} mediumPrice={product.mediumPrice} largePrice={product.largePrice} ratingAvg={product.ratingsAverage} />
         </SwiperSlide>
            
          ) :null
         }
         {/* favProd={favProd} */}
      </Swiper>
    </div>
   </div>
   </>
  )
}

export default Products
