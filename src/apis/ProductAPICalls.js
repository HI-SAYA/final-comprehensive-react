import {authRequest, request} from "./Api";
import {
    getAdminProduct,
    getAdminProducts,
    getProduct,
    getProducts,
    postSuccess,
    putSuccess
} from "../modules/ProductModule";
import {toast} from "react-toastify";

// 1. 상품 목록 조회 - 페이징, 주문 불가 상품 제외 (고객) + 2. 상품 목록 조회 - 페이징, 주문 불가 상품 제외 (관리자)
// @GetMapping("/products") + @GetMapping("/products-management")
export const callProductListAPI = ({ currentPage = 1 }) => {

    return async (dispatch, getState) => {

        const result = await request('GET', `/api/v1/products?page=${currentPage}`);
        console.log('callProductListAPI result : ', result);

        if(result.status === 200) {
            dispatch(getProducts(result));
        }
    }
};


// 3. 상품 목록 조회 : 카테고리 기준, 페이징, 주문 불가 상품 제외(고객)
// @GetMapping("/products/categories/{categoryCode}")
export const callProductCategoryListAPI = ({ categoryCode, currentPage = 1 }) => {

    return async (dispatch, getState) => {

        const result = await request('GET', `/api/v1/products/categories/${categoryCode}?page=${currentPage}`);
        console.log('callProductCategoryListAPI result : ', result);

        if(result.status === 200) {
            dispatch(getProducts(result));
        }
    }
};

// 4. 상품 목록 조회 : 상품명 검색 기준, 페이징, 주문 불가 상품 제외 (고객)
// @GetMapping("/products/search")
export const callProductSearchListAPI = ({ productName, currentPage = 1 }) => {

    return async (dispatch, getState) => {

        const result = await request('GET', `/api/v1/products/search?productName=${productName}&page=${currentPage}`);
        console.log('callProductSearchListAPI result : ', result);

        if(result.status === 200) {
            dispatch(getProducts(result));
        }
    }
};

// 5. 상품 상세 조회 : productCode로 상품 1개 조회, 주문 불가 상품 제외(고객)
// @GetMapping("/products/{productCode}")
export const callProductDetailAPI = ({ productCode }) => {

    return async (dispatch, getState) => {

        const result = await request('GET', `/api/v1/products/${productCode}`);
        console.log('callProductDetailAPI result : ', result);

        if(result.status === 200) {
            dispatch(getProduct(result));
        }
    }
};

// 6. 상품 상세 조회 : productCode로 상품 1개 조회, 주문 불가 상품 포함(관리자)
// @GetMapping("/products-management/{productCode}")
// @PathVariable final Long productCode
export const callAdminProductListAPI = ({ currentPage = 1 }) => {

    return async (dispatch, getState) => {

        const result = await authRequest.get(`/api/v1/products-management?page=${currentPage}`);
        console.log('callAdminProductListAPI result : ', result);

        if(result.status === 200) {
            dispatch(getAdminProducts(result));
        }
    }
};

// 7. 상품 등록(관리자)
// @PostMapping("/products")
export const callAdminProductRegistAPI = ({ registRequest }) => {

    return async (dispatch, getState) => {

        const result = await authRequest.post('/api/v1/products', registRequest);
        console.log('callAdminProductRegistAPI result : ', result);

        if(result.status === 201) {
            dispatch(postSuccess());
            toast.info("상품 등록이 완료 되었습니다.");
        }

    }
};

// 8. 상품 수정(관리자)
// @PutMapping("/products/{productCode}")
export const callAdminProductAPI = ({ productCode }) => {

    return async (dispatch, getState) => {

        const result = await authRequest.get(`/api/v1/products-management/${productCode}`);
        console.log('callAdminProductAPI result : ', result);

        if(result.status === 200) {
            dispatch(getAdminProduct(result));
        }

    }
};


// 9. 상품 삭제(관리자)
// @DeleteMapping("/products/{productCode}")
export const callAdminProductModifyAPI = ({ productCode, modifyRequest }) => {

    return async (dispatch, getState) => {

        const result = await authRequest.put(`/api/v1/products/${productCode}`, modifyRequest);
        console.log('callAdminProductModifyAPI result : ', result);

        if(result.status === 201) {
            dispatch(putSuccess());
            toast.info("상품 수정이 완료 되었습니다.");
        }

    }
};