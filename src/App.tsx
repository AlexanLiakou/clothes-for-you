import 'bootstrap/dist/css/bootstrap.min.css';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import Products from './components/Products/Products';
import MainLayout from './components/UI/MainLayout/MainLayout';
import Dashboard from './components/Dashboard/Dashboard';
import Cart from './components/Cart/Cart';
import './app.scss';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path={'/'} element={<MainLayout/>}>
      <Route index element={<Dashboard/>}></Route>
      <Route path={'/cart'} element={<Cart/>}></Route>
    </Route>
  ));
  return (
    <>
      <RouterProvider router={router}/>
      {/* <Products/> */}
    </>
  )
}

export default App
