import { createBrowserRouter } from "react-router-dom";
import Home from './../Home/Home';
import ProductPage from './../ProductPage/ProductPage';
import axios from 'axios';
import LoginPage from '../Authorization/LogInPage';
import SignUpPage from "../Authorization/SignUpPage";
import AvatarSelectPage from "../Authorization/AvatarSelectPage";
import CartPage from "../Cart/CartPage";
import AdminPage from "../Admin_Panel/Panel/AdminPage";
import AddProductPage from "../Admin_Panel/AddProductPage/AddProductPage";


export const urls = {
    Home: '/',
    Product: '/product/:name',
    Cart: '/cart',
    Products: '/products',
    AboutUs: '/about-us',
    Contacts: '/contacts',
    SignUp: '/auth/sign-up',
    LogIn: '/auth/log-in',
    SelectAvatar: '/auth/sign-up/select-avatar',
    AdminPanel: '/admin-panel/',
    AddProduct: 'add-product',
}

const router = createBrowserRouter([
    {
        path: urls.Home,
        element: <Home/>,
        loader: async ({request}) => {
            try {
                const response = await axios.get('http://localhost:8000/api/allProductsByCategories/')
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
        element: <CartPage/>,
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
    },

    // ADMIN PANEL
    {
        path: urls.AdminPanel,
        element: <AdminPage/>
    },
    {
        path: urls.AdminPanel + urls.AddProduct,
        element: <AddProductPage/>
    },
])


export default router

