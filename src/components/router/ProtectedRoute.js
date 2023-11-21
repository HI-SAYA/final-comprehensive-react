import {isAdmin, isLogin} from "../../utils/TokenUtils";
import {Navigate} from "react-router-dom";

function ProtectedRoute({ loginCheck, authCheck, children }) {

    if(authCheck) {
        /* 권한이 있어야 접근 가능한 기능 (상품 관리 - 등록, 수정, 삭제 등) */
        return isAdmin() ? children : <Navigate to="/"/>
        // 어드민이 아닌데 그냥 utl 쳐서 들어오려고 하면 그냥 루트로 보낸다.
    }

    if(loginCheck) {
        /* 로그인 해야만 볼 수 있는 기능 (마이페이지) */
        return isLogin() ? children : <Navigate to="/member/login"/>
        // 로그인이 됐나요? 됐으면 마이페이지 그대로 보여 주세요! 안 됐으면 로그인 하도록 컴포넌트를 바꿔주세요!
    } else {
        /* 로그인 하면 볼 수 없는 기능 (로그인, 회원가입) */
        return !isLogin() ? children : <Navigate to="/"/>
        // 로그인이 안됐죠? 안 됐으면 login 화면으로! 됐으면 "/" 메인 화면으로!
    }
    // children 현재 렌더링하고자 하는 컴포넌트가 넘어왔다고 생각하면 된다.
}

export default ProtectedRoute;