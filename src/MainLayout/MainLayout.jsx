import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navber/Navbar";
import Footer from "../components/shared/Footer";

const MainLayout = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <div className="min-h-[calc(100vh-138px)]">
                <Outlet></Outlet>
            </div>
            <footer>
             <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayout;