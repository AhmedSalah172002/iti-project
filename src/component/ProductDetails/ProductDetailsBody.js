import React from 'react'
import pizza1 from "../../images/pizza-1.png"
import { useParams } from 'react-router-dom'
import GetProductDetails from '../../hook/products/GetProductDetails'
import { useState } from 'react'
import AddCartHook from '../../hook/cart/AddCartHook'
import { ToastContainer } from 'react-toastify'

const ProductDetailsBody = () => {
  const [size, setSize] = useState("medium")
  let {ProductId} =useParams()
  const [item]=GetProductDetails(ProductId)
  const [quantity,onchangeQuantity , addToCartHandel] =AddCartHook(ProductId , size)
  return (
    <>
    <div dir='rtl' className="ProductDetailsBody mt-5 mb-5">
    <div className="container">
        <div className="row">
        <div className="col-lg-6 col-md-12">
                <div className="details-image mb-3">
                    <img src={item.image} style={{width:"270px"}} alt="img" className='img-fluid' />
                </div>
            </div>
            <div className="col-lg-6 col-md-12">
                <div dir='rtl' className="details-desc">
                   <div className="title mb-4">
                   <h4>{item.name} <span style={{fontSize:"16px",color:"#999999"}}>( عدد المقيمين :{25}  , التقييم : {4.3} )</span></h4>
                   </div>
                   <div className="price mb-4">
                   {size ==="medium" ? <h4>  {item.mediumPrice} جنية </h4>: size ==="small" ? <h4>  {item.smallPrice} جنية </h4>:<h4>  {item.largePrice} جنية </h4>}
                   </div>
                   <div className="desc mb-4">
                   <p>{item.description}</p>
                   </div>
                   <div className="size mb-4">
                        <div onClick={()=>setSize("small")} style={size ==="small"? {backgroundColor:"#fd9d3e",color:"white",transition:".3s"}:null} className="small">صغير</div>
                        <div onClick={()=>setSize("medium")} style={size ==="medium"? {backgroundColor:"#fd9d3e",color:"white",transition:".3s"}:null} className="medium">متوسط</div>
                        <div onClick={()=>setSize("large")} style={size ==="large"? {backgroundColor:"#fd9d3e",color:"white",transition:".3s"}:null} className="large">كبير</div>
                   </div>
                   <div className="qty mb-4">
                    <label className='ms-2' htmlFor="qty">الكمية : </label>
                    <input onChange={(e)=>onchangeQuantity(e)} type="number" min={1} value={quantity} name="qty" id="qty" />
                   </div>
                   <div className="add-to-cart d-inline-block">
                    <button onClick={()=>addToCartHandel()}>اضافة للعربة</button>
                   </div>
                </div>
            </div>
           
        </div>
    </div>
    <ToastContainer />
    </div>
    </>
  )
}

export default ProductDetailsBody
