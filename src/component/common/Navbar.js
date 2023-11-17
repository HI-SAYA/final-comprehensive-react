import {NavLink} from "react-router-dom";
import {isAdmin} from "../../utils/TokenUtils";

function Navbar() {

    return (
        <div className="navbar-div">
            <ul className="nav-list-ul">
                <li><NavLink to="/">모든 음식</NavLink></li>
                <li><NavLink to="/product/categories/1">식사</NavLink></li>
                <li><NavLink to="/product/categories/2">디저트</NavLink></li>
                <li><NavLink to="/product/categories/3">음료</NavLink></li>
                { isAdmin() && <li><NavLink to="/product-management">상품등록</NavLink></li> }
                {/* 어드민으로 접속한 사람만 보이도록 설정 */}
            </ul>
        </div>
    );
}


export default Navbar;