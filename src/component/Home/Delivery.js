import React from 'react'
import topImage from "../../images/customer-top-bg.png"
import bottomtopImage from "../../images/customer-bottom-bg.png"
import heart from "../../images/pizza-heart.png"
import { Link } from 'react-router-dom'

const Delivery = () => {
  return (
  <>
  
  <div dir='ltr' className="delivery mt-5 mb-5">
  <div className="delivery-top ">
    <img src={topImage} alt="img" className='img-fluid' />
    </div>
    <div className="container">
        <div className="row">
            <div className="col-lg-6 col-md-12">
                <div className="delivery-image">
                    <img src={heart} alt="img" className='img-fluid' />
                </div>
            </div>
            <div className="col-lg-6 col-md-12">
               <div className="delivery-text">
                    <h4 className='mb-2'>أسرع دليفري في مصر</h4>
                    <h1 className='mb-4'>البيتزا المفضلة لديك ،علي الطريق!</h1>
                    <p className='mb-5'>من المسرات المميزة مثل لحم البقر وأفضل البطاطس المهروسة في باريس ، وصولاً إلى التخصصات الفريدة.</p>
                    <div className="order-now-btn mt-4 mb-3">
                        <Link onClick={()=>window.scrollTo({ top: 0, behavior: 'smooth' })} to="/products">اطلب الأن</Link>
                    </div>
               </div>
            </div>
        </div>
    </div>
  
    <div className="delivery-bottom ">
    <img src={bottomtopImage} alt="img" className='img-fluid' />
        </div>
  </div>
 
  </>
  )
}

export default Delivery
