import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {callProductCategoryListAPI} from "../../apis/ProductAPICalls";
import ProductList from "../../components/lists/ProductList";
import PagingBar from "../../components/common/PagingBar";

// 3. 상품 목록 조회 : 카테고리 기준, 페이징, 주문 불가 상품 제외(고객)
function CategoryMain(){

    const dispatch = useDispatch();
    const {categoryCode} = useParams();
    const {products} = useSelector(state => state.productReducer);
    const {currentPage, setCurrentPage} = useState(1);


    useEffect(() => {
        dispatch(callProductCategoryListAPI({categoryCode, currentPage}));
    }, [categoryCode, currentPage]);

    // console.log(categoryCode);

    return(
        <>
            {products
                &&
                <>
                    <ProductList data={products.data}/>
                    <PagingBar pageInfo={products.pageInfo} setCurrentPage={setCurrentPage}/>
                </>
            }
        </>
    );
}

export default CategoryMain;