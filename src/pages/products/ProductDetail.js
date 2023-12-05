import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {callProductDetailAPI} from "../../apis/ProductAPICalls";
import ProductItem from "../../components/items/ProductItem";

// 5. 상품 상세 조회 : productCode로 상품 1개 조회, 주문 불가 상품 제외(고객)
function ProductDetail() {

    const dispatch = useDispatch();
    const { productCode } = useParams();
    const { product } =useSelector(state => state.productReducer);

    useEffect(() => {
        dispatch(callProductDetailAPI({productCode}));
    }, []);


    return (
        <>
            {
            product &&
                <div className="detail-div">
                    <ProductItem product={product}/>
                </div>
            }
        </>
    );
}

export default ProductDetail;