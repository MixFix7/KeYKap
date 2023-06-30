import { createBrowserRouter } from "react-router-dom";
import Home from './../Home/Home';
import Product from "../Home/NewProduct/Product";
import ProductPage from './../ProductPage/ProductPage';
import axios from 'axios';
import MainBar from "../Home/Bars/MainBar";
import LoginPage from './../Authorization/Register/LogInPage';


const urls = {
    Home: '/',
    Product: '/product/:name',
    Registration: '/auth/reg',
    LogIn: '/auth/login'
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
        path: urls.Registration,
        element: <LoginPage/>,
    }
    
])


export default router

