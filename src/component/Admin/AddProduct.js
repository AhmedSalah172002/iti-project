import React from 'react'
import pizzaLoading from "../../images/spinner.gif"
import AddProductHook from '../../hook/products/AddProductHook'
import { ToastContainer } from 'react-toastify'
const AddProduct = () => {
    const [img, name,description,smallPrice,mediumPrice,largePrice, loading, isPress, handelSubmit, onImageChange, onChangeName,onChangeDescription,onChangeSmallPrice,onChangemediumPrice,onChangeLargePrice]
    =AddProductHook()


  return (
    <div className="AddProduct">
        <div className="container">
            <h2 className='mb-4'>إضافة منتج</h2>
            <div className="product-name  mb-4 d-flex flex-column align-items-start">
                <label className='mb-3' htmlFor="product-pic">صورة المنتج</label>
               <input onChange={(e)=> onImageChange(e)} value={img}  placeholder='صورة المنتج (URL)' type="text" name="product-pic" id="product-pic" />
            </div>
            <div className="product-name  mb-4 d-flex flex-column align-items-start">
                <label className='mb-3' htmlFor="product-name">اسم المنتج</label>
               <input onChange={(e)=> onChangeName(e)} value={name}  placeholder='اسم المنتج' type="text" name="product-name" id="product-name" />
            </div>
            <div className="product-desc  mb-4 d-flex flex-column align-items-start">
                <label className='mb-3' htmlFor="product-desc">وصف المنتج</label>
               <input onChange={(e)=> onChangeDescription(e)} value={description}  placeholder='وصف المنتج' type="text" name="product-desc" id="product-desc" />
            </div>
            <div className="small-price  mb-4 d-flex flex-column align-items-start">
                <label className='mb-3' htmlFor="small-price ">سعر الحجم الصغير</label>
               <input onChange={(e)=> onChangeSmallPrice(e)} value={smallPrice}  placeholder='سعر الحجم الصغير' type="number" name="small-price " id="small-price " />
            </div>
            <div className="medium-price  mb-4 d-flex flex-column align-items-start">
                <label className='mb-3' htmlFor="medium-price ">سعر الحجم المتوسط</label>
               <input onChange={(e)=> onChangemediumPrice(e)} value={mediumPrice} placeholder='سعر الحجم المتوسط' type="number" name="medium-price " id="medium-price " />
            </div>
            <div className="large-price  mb-4 d-flex flex-column align-items-start">
                <label className='mb-3' htmlFor="large-price ">سعر الحجم الكبير</label>
               <input onChange={(e)=> onChangeLargePrice(e)} value={largePrice}  placeholder='سعر الحجم الكبير' type="number" name="large-price " id="large-price " />
            </div>
            <div className="admin-btn">
                <button onClick={()=>handelSubmit()}>إضافة</button>
            </div>
            {
                isPress ? loading ? <img src={pizzaLoading} alt='load'  /> : <h4>تم الانتهاء</h4> : null
            }
            <ToastContainer />
        </div>
    </div>
  )
}

export default AddProduct
