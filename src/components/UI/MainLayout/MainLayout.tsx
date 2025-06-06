import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from '../../../store/store';
import NavMenu from "../../NavMenu/NavMenu";


const MainLayout = () => {
    return (
        <Provider store={store}>
            <NavMenu/>
            <Outlet/>
        </Provider>  
    );
}

export default MainLayout;