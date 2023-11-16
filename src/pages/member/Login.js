import {useNavigate} from "react-router-dom";
import LoginForm from "../../component/form/LoginForm";
import {useSelector} from "react-redux";
import {useEffect} from "react";
import {toast, ToastContainer} from "react-toastify";

function Login() {

    const navigate = useNavigate();
    const { loginSuccess } = useSelector(state => state.memberReducer);

    useEffect(() => {
        if(loginSuccess === true) {
            window.location.replace("/");
        } else if(loginSuccess === false) {
            toast.warning('로그인 실패하였습니다. 아이디와 비밀번호를 확인해주세요.');
        }
    }, [loginSuccess]);

    const onClickSignupHandler = () => {
        navigate('/member/signup');
    }

    return (
        <>
            <ToastContainer hideProgressBar={true} position="top-center"/>
            <div className="background-div">
                <div className="login-div">
                    <LoginForm/>
                    <button
                        onClick={ onClickSignupHandler }
                    >
                        회원가입
                    </button>
                </div>
            </div>
        </>
    );
}

export default Login;