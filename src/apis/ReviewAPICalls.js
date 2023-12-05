import {authRequest} from "./Api";
import {getReview, getReviews, postSuccess} from "../modules/ReviewModule";
import {toast} from "react-toastify";



//  1. 상품별 리뷰 목록 조회
//  @GetMapping("/reviews/product/{productCode}")
export const callReviewsAPI = ({ productCode, currentPage }) => {

    return async (dispatch, getState) => {

        const result = await authRequest.get(`/api/v1/reviews/product/${productCode}?page=${currentPage}`,
            {
                headers : {
                    'Content-Type' : 'application/json'
                }
            }).catch(e => {
            console.log(e);
        });

        console.log('callReviewsAPI result : ', result);

        if(result?.status === 200) {
            dispatch(getReviews(result));
        }
    }
}

// 2. 리뷰 코드로 리뷰 상세 조회
// @GetMapping("/reviews/{reviewCode}")
export const callReviewAPI = ({ reviewCode }) => {

    return async (dispatch, getState) => {

        const result
            = await authRequest.get(`/api/v1/reviews/${reviewCode}`,
            {
                headers : {
                    'Content-Type' : 'application/json'
                }
            }).catch(e => {
            console.log(e);
        });

        console.log('callReviewAPI result : ', result);

        if(result?.status === 200) {
            dispatch(getReview(result));
        }
    }
}

// 3. 리뷰 작성
export const callReviewRegistAPI = ({ registRequest }) => {

    return async (dispatch, getState) => {

        const result = await authRequest.post('/api/v1/reviews',
            JSON.stringify(registRequest),
            {
                headers : {
                    'Content-Type' : 'application/json'
                }
            }).catch(e => {
            if(e.response.status === 404) {
                toast.error("리뷰 작성이 불가한 상품입니다.");
            } else if(e.response.status === 409) {
                toast.error("리뷰가 이미 작성 되어 작성 불가합니다.");
            }
        });

        console.log('callReviewRegistAPI result : ', result);

        if(result?.status === 201) {
            dispatch(postSuccess());
        }
    }
}