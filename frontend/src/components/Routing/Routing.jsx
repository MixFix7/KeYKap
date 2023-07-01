import { createBrowserRouter } from "react-router-dom";
import Home from './../Home/Home';
import Product from "../Home/NewProduct/Product";
import ProductPage from './../ProductPage/ProductPage';
import axios from 'axios';
import MainBar from "../Home/Bars/MainBar";
import LoginPage from '../Authorization/LogInPage';
import SignUpPage from "../Authorization/SignUpPage";
import SelectAvatar from "../Authorization/UI/SelectAvatar.jsx";
import AvatarSelectPage from "../Authorization/AvatarSelectPage";
import CartPage from "../Cart/CartPage";


export const urls = {
    Home: '/',
    Product: '/product/:name',
    Cart: '/cart/:username',
    Products: '/products',
    AboutUs: '/about-us',
    Contacts: '/contacts',
    SignUp: '/auth/sign-up',
    LogIn: '/auth/log-in',
    SelectAvatar: '/auth/sign-up/select-avatar',
}

const router = createBrowserRouter([
    {
        path: urls.Home,
        element: <Home/>,
        loader: async ({request}) => {
            try {
                const response = await axios.get('http://localhost:8000/api/allProducts/')
                return response.data

            } catch (error) {
                console.error(error)
                return null
        }}
    },
    {
        path: urls.Product,
        element: <ProductPage/>,
        loader: async ({params, request}) => {
            try {
                const response = await axios.get(`http://localhost:8000/api/OneProduct/${params.name}`)
                return {product: response.data}
                
            } catch (error) {
                console.error(error)
                return null
            }
        }
    },
    {
        path: urls.Cart,
        element: <CartPage/>
    },
        // AUTHORIZATION
    {
        path: urls.SignUp,
        element: <SignUpPage/>
    },
    {
        path: urls.LogIn,
        element: <LoginPage/>,
    },
    {
        path: urls.SelectAvatar,
        element: <AvatarSelectPage/>
    }
])


export default router

