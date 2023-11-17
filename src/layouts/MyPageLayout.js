import {Outlet} from "react-router-dom";
import MyPageNavbar from "../component/common/MyPageNavbar";

function MyPageLayout () {

    return (
        <div className="mypage-layout-div">
            <MyPageNavbar/>
            <main className="mypage-main">
                <Outlet/>
            </main>
        </div>
    );
}

export default MyPageLayout;