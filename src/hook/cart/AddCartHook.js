import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProductToCart } from '../../redux/actions/cartAction'
import notify from '../useNotifaction'
import GetProductDetails from '../products/GetProductDetails'

const AddCartHook = (productId,size) => {





    let auth 
    if(localStorage.getItem("user") !== null){
        auth = JSON.parse(localStorage.getItem("user"))
    }



  const  [item] =GetProductDetails(productId)

 const dispatch = useDispatch()
 const [quantity ,setQuantity]=useState(1)
 const [loading, setLoading] = useState(true)

 const onchangeQuantity=(e)=>{
    setQuantity(e.target.value)
 }


 const addToCartHandel = async () => {
    if(!auth){
        notify("قم بتسجيل الدخول اولا", "warn")
        return false ;
    }
    if(auth.role === "admin"){
        notify("غير مسموح للأدمن بإضافة عربة", "warn")
        return false ;
    }
    setLoading(true)
    await dispatch(addProductToCart({
        product : item,
        size,
        quantity,
        user : auth.email
    }))
    setLoading(false)
}

const res = useSelector(state => state.cartReducer.addToCart)

useEffect(() => {

    if (loading === false) {
        if (res  ) {
            notify("تمت اضافة المنتج للعربه بنجاح", "success")
            setTimeout(() => {
                window.location.reload(false)
            }, 1000);
        } else {
            notify("قم بتسجيل الدخول اولا", "warn")
        }
    }
}, [loading])

return [quantity,onchangeQuantity , addToCartHandel]

}

export default AddCartHook
