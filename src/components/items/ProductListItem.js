import {useNavigate} from "react-router-dom";


// 1. 상품 목록 조회 - 페이징, 주문 불가 상품 제외 (고객) + 2. 상품 목록 조회 - 페이징, 주문 불가 상품 제외 (관리자)
function ProductListItem ({product : {productCode, productImageUrl, productName, productPrice} }) {

    const navigate = useNavigate();

    const onClickProductHandler = () => {
        navigate(`/product/${productCode}`);
    }

    return (
        <div
            className="product-div"
            onClick={ onClickProductHandler }

        >
            <img src={ productImageUrl } alt={ productName }/>
            <h5>{ productName }</h5>
            <h5>{ productPrice }</h5>
        </div>
    )
}

export default ProductListItem;