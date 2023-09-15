import React from 'react'
import notify from '../../hook/useNotifaction'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import { createProduct } from '../../redux/actions/productsAction';
const AddProductHook = () => {
    const dispatch = useDispatch();
     const [img, setImg] = useState("")
     const [name, setName] = useState('')
     const [description, setDescription] = useState('')
     const [smallPrice, setSmallPrice] = useState('')
     const [mediumPrice, setMediumPrice] = useState('')
     const [largePrice, setLargePrice] = useState('')
     const [loading, setLoading] = useState(true)
     const [isPress, setIsPress] = useState(false)
 
     //to change name state
     const onChangeName = (event) => {
         event.persist();
         setName(event.target.value)
     }
     const onChangeDescription = (event) => {
        event.persist();
        setDescription(event.target.value)
    }
     const onChangeSmallPrice = (event) => {
        event.persist();
        setSmallPrice(event.target.value)
    }
    const onChangemediumPrice = (event) => {
        event.persist();
        setMediumPrice(event.target.value)
    }
    const onChangeLargePrice = (event) => {
        event.persist();
        setLargePrice(event.target.value)
    }
   
 
     //when image change save it 
     const onImageChange = (event) => {
             event.persist();
             setImg(event.target.value)
         }
     
     const res = useSelector(state => state.allproducts.products)
 
     //save data in database
     const handelSubmit = async () => {
        if(img ===""){
            notify('قم بتحديد صورة للمنتج', "error");
        }
         setLoading(true)
         setIsPress(true)
         await dispatch(createProduct({
            name,
            image:img,
            description,
            smallPrice,
            mediumPrice,
            largePrice

         }))
         setLoading(false)
     }
 
     useEffect(() => {
         if (loading === false) {
             setImg("")
             setName("")
             setDescription("")
             setLargePrice("")
             setMediumPrice("")
             setSmallPrice("")
             setLoading(true)
             
             setTimeout(() => setIsPress(false), 1000)
 
             if (res.status === 201) {
                 notify('تمت عملية الاضافة بنجاح', "success");
             }
             else {
               
                 notify('هناك مشكله فى عملية الاضافة', "error");
             }
         }
     }, [loading])
 
     return [img, name,description,smallPrice,mediumPrice,largePrice, loading, isPress, handelSubmit, onImageChange, onChangeName,onChangeDescription,onChangeSmallPrice,onChangemediumPrice,onChangeLargePrice]
}

export default AddProductHook
