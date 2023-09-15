import React from 'react'
import ProductCard from '../Home/ProductCard'

import GetAllProducts from '../../hook/products/GetAllProducts'
// import GetWishlistHook from '../../hook/user/GetWishlistHook'
const ProductsMenue = () => {
  const [items]=GetAllProducts()
  console.log(items);
  // const [favProd]=GetWishlistHook()
  return (
   <div dir='rtl' className="products-menue mt-5 mb-5">
        <div className="container">
           <div className="row">
           {
            items ? items.map((product ,i)=>{
              return(
                <div key={i} className="col-lg-4 col-md-6 col-sm-12">
                <ProductCard productId={product.id}  image={product.image}
                    title={product.name} description={product.description}
                      smallPrice={product.smallPrice} mediumPrice={product.mediumPrice} largePrice={product.largePrice}   />
                </div>
              )
            }) : <h1>لا يوجد منتجات حتي الأن</h1> 
           }
           
           </div>
        </div>
   </div>
  )
}

export default ProductsMenue
