import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {callAdminProductListAPI} from "../../apis/ProductAPICalls";
import PagingBar from "../../components/common/PagingBar";
import ProductTable from "../../components/items/ProductTable";
import {useNavigate} from "react-router-dom";
import {ToastContainer} from "react-toastify";


// 6.상품 상세 조회 : productCode로 상품 1개 조회, 주문 불가 상품 포함(관리자)
// 7. 상품 등록 페이지 연결 아래 button 참조
function ProductManagement() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const {adminProducts} = useSelector(state => state.productReducer);

    useEffect(() => {
        dispatch(callAdminProductListAPI({currentPage}));
    }, [currentPage]);

    const onClickProductInsert = () => {
        navigate('/product-regist');
    }

    return(
        <>
            { adminProducts &&
                <div className="management-div">
                    <ToastContainer hideProgressBar={true} position="top-center"/>
                    <ProductTable data={adminProducts.data}/>
                    <PagingBar pageInfo={adminProducts.pageInfo} setCurrentPage={setCurrentPage}/>
                    <button onClick={ onClickProductInsert }>상품등록</button>
                </div>
            }
        </>
    );
}


export default ProductManagement;