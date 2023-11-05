
import { Outlet } from 'react-router-dom';
import Home from '../pages/Home';
import Header from '../pages/Header';
import Footer from '../pages/Footer';


const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;