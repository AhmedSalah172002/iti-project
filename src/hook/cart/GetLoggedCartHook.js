import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllUserCartItems } from '../../redux/actions/cartAction';

const GetLoggedCartHook = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true)
    const [itemsNum, setItemsNum] = useState(0)
    const [cartItems, setCartItems] = useState([])

    useEffect(() => {
        const get = async () => {
            setLoading(true)
            await dispatch(getAllUserCartItems())
            setLoading(false)
        }
        get()
    }, [])
    const res = useSelector(state => state.cartReducer.getAllUserCart)
    let auth
    if(JSON.parse(localStorage.getItem("user")) !==null){
        auth =JSON.parse(localStorage.getItem("user"))
    }
    let data 
    let result =0;
    useEffect(() => {
        if (loading === false) {
            if (res ) {
               data=res.filter(((e)=> e.user === auth?.email))
                setItemsNum(data.length)
                setCartItems(data)

            } else {
               
                setItemsNum(0)
                setCartItems([])
                
            }

        }
    }, [loading])

    return [itemsNum, cartItems]
}

export default GetLoggedCartHook
