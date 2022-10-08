import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainPage from "./pages/mainPage/MainPage";
import CartPage from "./pages/cartPage/CartPage";
import CheckOutPage from "./pages/checkOutPage/CheckOutPage";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage";
import AdminMainPage from "./pages/adminMainPage/AdminMainPage";
import AdminProductsPage from "./pages/adminProductPage/AdminProductPage";
import AdminMenuPage from "./pages/adminMenuPage/AdminMenuPage";

const App = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/cart" element={<CartPage/>}/>
                <Route path="/checkout" element={<CheckOutPage/>}/>
                <Route path="/admin/main" element={<AdminMainPage/>}/>
                <Route path="/admin/menu" element={<AdminMenuPage/>}/>
                <Route path="/admin/menu/:menu_name" element={<AdminProductsPage/>}/>
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
