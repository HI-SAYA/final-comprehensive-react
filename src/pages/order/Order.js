import {ToastContainer} from "react-toastify";
import {useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {callOrderRegistAPI} from "../../apis/OrderAPICalls";

// 1. 주문 등록
function Order() {

    /* navigate로 전달 된 state 꺼내기 위해 사용 */
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { product, amount } = { ...location.state };
    const [form, setForm] = useState({
        productCode : product.productCode,
        orderAmount : amount
        // 요청하는 클래스 필드명과 동일하게 설정
    });
    const { postSuccess } = useSelector(state => state.orderReducer);

    useEffect(() => {
        if(postSuccess === true) {
            navigate("/member/mypage/payment", { replace : true });
        }
    }, [postSuccess]);

    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    };

    const onClickPurchaseHandler = () => {
        dispatch(callOrderRegistAPI({ registRequest : form }))
    };

    return (
        <>
            <ToastContainer hideProgressBar={true} position="top-center"/>
            <div className="purchase-div">
                <div className="purchase-info-div">
                    <h3>주문자 정보</h3>
                    <input
                        name="orderPhone"
                        placeholder="핸드폰번호"
                        autoComplete="off"
                        onChange={onChangeHandler}
                        className="purchase-input"
                    />
                    <input
                        placeholder="이메일주소"
                        name="orderEmail"
                        autoComplete="off"
                        onChange={onChangeHandler}
                        className="purchase-input"
                    />
                    <h3>배송 정보</h3>
                    <input
                        placeholder="받는사람"
                        name="orderReceiver"
                        autoComplete="off"
                        onChange={onChangeHandler}
                        className="purchase-input"
                    />
                    <input
                        placeholder="배송주소"
                        name="orderAddress"
                        autoComplete="off"
                        onChange={onChangeHandler}
                        className="purchase-input"
                    />
                </div>
                <div className="purchase-info-div">
                    <h3>결제 정보</h3>
                    <table>
                        <colgroup>
                            <col width="25%" />
                            <col width="75%" />
                        </colgroup>
                        <tbody>
                        <tr>
                            <th>상품명</th>
                            <td>{ product.productName }</td>
                        </tr>
                        <tr>
                            <th>상품갯수</th>
                            <td>{ amount }</td>
                        </tr>
                        <tr>
                            <th>결제금액</th>
                            <td>{ amount * product.productPrice }</td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <button onClick={onClickPurchaseHandler}>구매하기</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Order;
