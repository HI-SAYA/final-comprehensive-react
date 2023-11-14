import Header from "../component/common/Header";
import Navbar from "../component/common/Navbar";
import {Outlet} from "react-router-dom";
import Footer from "../component/common/Footer";

function Layout() {

    return (
        <>
            <Header/>
            <Navbar/>
            <main className="main">
                <Outlet/>
            </main>
            <Footer/>
        </>
    );
}


export default Layout;