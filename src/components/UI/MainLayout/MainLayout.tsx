import { Outlet } from "react-router-dom";
import NavMenu from "../../NavMenu/NavMenu";
const MainLayout = () => {
    return (
        <>
        <NavMenu/>
        <Outlet/>
        </>
        
    );
}

export default MainLayout;