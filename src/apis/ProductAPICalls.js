import {request} from "./Api";
import {getProduct, getProducts} from "../modules/ProductModule";

export const callProductListAPI = ({ currentPage = 1 }) => {

    return async (dispatch, getState) => {

        const result = await request('GET', `/products?page=${currentPage}`);
        console.log('callProductListAPI result : ', result);

        if(result.status === 200) {
            dispatch(getProducts(result));
        }
    }
};


export const callProductCategoryListAPI = ({ categoryCode, currentPage = 1 }) => {

    return async (dispatch, getState) => {

        const result = await request('GET', `/products/categories/${categoryCode}?page=${currentPage}`);
        console.log('callProductCategoryListAPI result : ', result);

        if(result.status === 200) {
            dispatch(getProducts(result));
        }
    }
};


export const callProductSearchListAPI = ({ productName, currentPage = 1 }) => {

    return async (dispatch, getState) => {

        const result = await request('GET', `/products/search?productName=${productName}&page=${currentPage}`);
        console.log('callProductSearchListAPI result : ', result);

        if(result.status === 200) {
            dispatch(getProducts(result));
        }
    }
};


export const callProductDetailAPI = ({ productCode }) => {

    return async (dispatch, getState) => {

        const result = await request('GET', `/products/${productCode}`);
        console.log('callProductDetailAPI result : ', result);

        if(result.status === 200) {
            dispatch(getProduct(result));
        }
    }
};