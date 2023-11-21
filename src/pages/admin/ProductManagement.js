import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {callAdminProductListAPI} from "../../apis/ProductAPICalls";
import PagingBar from "../../components/common/PagingBar";
import ProductTable from "../../components/items/ProductTable";
import {useNavigate} from "react-router-dom";
import {ToastContainer} from "react-toastify";

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