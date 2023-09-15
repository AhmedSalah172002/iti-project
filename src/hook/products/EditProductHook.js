import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOneProduct, updateProducts } from '../../redux/actions/productsAction'
import notify from '../useNotifaction'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const EditProductHook = (id) => {
    
    const dispatch = useDispatch()
    const navigate = useNavigate();
    useEffect(() => {
        
        dispatch(getOneProduct(id))
    },[])

    const Product = useSelector((state) => state.allproducts.oneProduct);
    let item = [];
    try {
        if (Product)
            item = Product
        else
            item = []
    } catch (e) {
        console.log(e);
     }

     const [img, setImg] = useState("")
     const [name, setName] = useState('')
     const [description, setDescription] = useState('')
     const [smallPrice, setSmallPrice] = useState('')
     const [mediumPrice, setMediumPrice] = useState('')
     const [largePrice, setLargePrice] = useState('')
     const [loading, setLoading] = useState(true)
     const [isPress, setIsPress] = useState(false)

     useEffect(() => {
        if(item){
           
            setImg(item.image)
            setName(item.name)
            setDescription(item.description)
            setLargePrice(item.largePrice)
            setMediumPrice(item.mediumPrice)
            setSmallPrice(item.smallPrice)
            setLoading(true)
         }
     },[item])
     

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
     const res = useSelector(state => state.allproducts.updateProducts)

     //save data in database
     const handelSubmit = async () => {
       
         setLoading(true)
         setIsPress(true)
         await dispatch(updateProducts(id,{
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
             setLoading(true)
             setTimeout(() => setIsPress(false), 1000)
             if (res.status === 200) {
                 notify('تمت عملية التعديل بنجاح', "success");
                 setTimeout(() => {
                    navigate("/admin/products")
                }, 1500);
             }
             else {
                 notify('هناك مشكله فى عملية التعديل', "error");
             }
         }
     }, [loading])
 
     return [img, name,description,smallPrice,mediumPrice,largePrice, loading, isPress, handelSubmit, onImageChange, onChangeName,onChangeDescription,onChangeSmallPrice,onChangemediumPrice,onChangeLargePrice]

}

export default EditProductHook
