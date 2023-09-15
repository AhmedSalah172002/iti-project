import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../redux/actions/productsAction';

const GetHomeProducts = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllProducts())
    }, [])
    const allProducts = useSelector((state) => state.allproducts.allProducts);
    let items = [];
    try {
        if (allProducts)
            items = allProducts.slice(0, 6);
        else
            items = []
    } catch (e) {
        console.log(e);
     }

    return [items]
    
}

export default GetHomeProducts
