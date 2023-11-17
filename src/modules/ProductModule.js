/* 초기값 */
import {createActions, handleActions} from "redux-actions";

const initialState = {};

/* 액션 타입 */
const GET_PRODUCTS = 'product/GET_PRODUCTS';
const GET_PRODUCT = 'product/GET_PRODUCT';
const GET_ADMIN_PRODUCTS = 'product/GET_ADMIN_PRODUCTS';
const GET_ADMIN_PRODUCT = 'product/GET_ADMIN_PRODUCT';
const POST_SUCCESS = 'product/POST_SUCCESS';
const PUT_SUCCESS = 'product/PUT_SUCCESS';

/* 액션 함수 */
export const { product : { getProducts, getProduct, getAdminProducts, getAdminProduct, postSuccess, putSuccess } } = createActions({
    [GET_PRODUCTS] : result => ({ products : result.data }),
    [GET_PRODUCT] : result => ({ product : result.data }),
    [GET_ADMIN_PRODUCTS] : result => ({ adminProducts : result.data }),
    [GET_ADMIN_PRODUCT] : result => ({ adminProduct : result.data }),
    [POST_SUCCESS] : () => ({ postSuccess : true }),
    [PUT_SUCCESS] : () => ({ putSuccess : true }),
});
// [type] : 'product/GET_PRODUCTS'

/* 리듀서 */
const productReducer = handleActions({
    [GET_PRODUCTS] : (state, { payload }) => payload,  // { products : result.date } = payload
    [GET_PRODUCT] : (state, { payload }) => payload,
    [GET_ADMIN_PRODUCTS] : (state, { payload }) => payload,
    [GET_ADMIN_PRODUCT] : (state, { payload }) => payload,
    [POST_SUCCESS] : (state, { payload }) => payload,
    [PUT_SUCCESS] : (state, { payload }) => payload,
}, initialState);

export default productReducer;