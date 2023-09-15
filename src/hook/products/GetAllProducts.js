import React, { useEffect, useState } from 'react'
import {  getAllProducts, getAllProductsSearch } from '../../redux/actions/productsAction';
import { useDispatch, useSelector } from 'react-redux';

const GetAllProducts = () => {


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllProducts())
    }, [])
    const allProducts = useSelector((state) => state.allproducts.allProducts);
    let items = [];
    try {
        if (allProducts)
            items = allProducts;
        else
            items = []
    } catch (e) {
        console.log(e);
     }

    return [items]

}

export default GetAllProducts
