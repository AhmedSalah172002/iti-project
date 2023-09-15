
import useInsertData from '../../hooks/useInsertData';
import { DELETE_PRODUCTS,  UPDATE_PRODUCTS, CREATE_PRODUCTS, GET_ALL_PRODUCTS, GET_PRODUCT_DETALIS } from '../type'
import useGetData from '../../hooks/useGetData';
import useDeleteData from '../../hooks/useDeleteData';
import useInsUpdateData from '../../hooks/useUpdateData';



//create products with pagination
export const createProduct = (formatData) => async (dispatch) => {
    try {
        const response = await useInsertData("/products", formatData);
        console.log(formatData ,response);
        dispatch({
            type: CREATE_PRODUCTS,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: CREATE_PRODUCTS,
            payload: e.response,
        })
    }
}

//get all products with pagination
export const getAllProducts = (limit) => async (dispatch) => {
    try {
        const response = await useGetData(`/products?limit=${limit}`);
        dispatch({
            type: GET_ALL_PRODUCTS,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: GET_ALL_PRODUCTS,
            payload: e.response,
        })
    }
}








//get one product with id
export const getOneProduct = (id) => async (dispatch) => {
    try {
        const response = await useGetData(`/products/${id}`);
        dispatch({
            type: GET_PRODUCT_DETALIS,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: GET_PRODUCT_DETALIS,
            payload: e.response,
        })
    }
}



//delete prooduct with id
export const deleteProducts = (id) => async (dispatch) => {
    try {
        const response = await useDeleteData(`/products/${id}`);

        dispatch({
            type: DELETE_PRODUCTS,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: DELETE_PRODUCTS,
            payload: e.response,
        })
    }
}

//update prooduct with id
export const updateProducts = (id, data) => async (dispatch) => {
    try {
        const response = await useInsUpdateData(`/products/${id}`, data);
        dispatch({
            type: UPDATE_PRODUCTS,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: UPDATE_PRODUCTS,
            payload: e.response,
        })
    }
}


