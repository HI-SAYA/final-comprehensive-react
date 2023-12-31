import {useParams, useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {callProductCategoryListAPI, callProductSearchListAPI} from "../../apis/ProductAPICalls";
import ProductList from "../../components/lists/ProductList";
import PagingBar from "../../components/common/PagingBar";

// 4. 상품 목록 조회 : 상품명 검색 기준, 페이징, 주문 불가 상품 제외 (고객)
function SearchMain(){

    const dispatch = useDispatch();
    const [searchParams] = useSearchParams(); // 배열 구조 분해 할당
    const productName = searchParams.get('value'); // get메소드로 꺼내고 싶은 거 꺼내기
    const {products} = useSelector(state => state.productReducer);
    const {currentPage, setCurrentPage} = useState(1);

    useEffect(() => {
        dispatch(callProductSearchListAPI({productName, currentPage}));
    }, [productName, currentPage]);

    // console.log(categoryCode);

    return(
        <>
            { products
                &&
                <>
                    <ProductList data={products.data}/>
                    <PagingBar pageInfo={products.pageInfo} setCurrentPage={setCurrentPage}/>
                </>
            }
        </>
    );
}

export default SearchMain;