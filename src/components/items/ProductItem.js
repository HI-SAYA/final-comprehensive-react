import {useNavigate} from "react-router-dom";
import {useState} from "react";

// 5. 상품 상세 조회 : productCode로 상품 1개 조회, 주문 불가 상품 제외(고객)
function ProductItem({ product }) {

    const navigate = useNavigate();
    const [amount, setAmount] = useState(1);

    /* 구매 수량 변경 이벤트 */
    const onChangeAmountHandler = e => {
        setAmount(e.target.value);
    }

    /* 구매하기 버튼 이벤트 */
    const onClickOrderHandler = () => {
        /* 이동하는 component로 정보를 전달하기 위해 2번째 인자로 객체에 state 속성으로 전달할 수 있다. */
        navigate('/order', { state : { product, amount } });
    }

    /* 리뷰보기 버튼 이벤트 */
    const onClickReviewHandler = () => {
        navigate(`/review/product/${product.productCode}`);
    }

    return(
        <>
            <div className="img-div">
                <img src={product.productImageUrl} alt={product.productName}/>
                <button
                    onClick={ onClickReviewHandler }
                    className="review-btn">리뷰보기</button>
            </div>
            <div className="description-div">
                <table className="description-table">
                    <tbody>
                        <tr>
                            <th>상품 코드</th>
                            <td>{product.productCode}</td>
                        </tr>
                        <tr>
                            <th>상품명</th>
                            <td>{product.productName}</td>
                        </tr>
                        <tr>
                            <th>상품 가격</th>
                            <td>{product.productPrice}</td>
                        </tr>
                        <tr>
                            <th>상품 설명</th>
                            <td>{product.productDescription}</td>
                        </tr>
                        <tr>
                            <th>구매 가능 수량</th>
                            <td>{product.productStock}</td>
                        </tr>
                        <tr>
                            <th>구매수량</th>
                            <td><input type="number" min="1" onChange={onChangeAmountHandler} value={amount}/></td>
                        </tr>

                    </tbody>
                </table>
                <button
                    onClick={ onClickOrderHandler }
                    className="product-buy-btn"
                >
                    구매 하기
                </button>
            </div>
        </>
    );
}

export default ProductItem;