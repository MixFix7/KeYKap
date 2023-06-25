import { createBrowserRouter } from "react-router-dom";
import Home from './../Home/Home';
import Product from "../Home/NewProduct/Product";
import ProductPage from './../ProductPage/ProductPage';
import axios from 'axios';
import MainBar from "../Home/Bars/MainBar";

const router = createBrowserRouter([
    {
        path: '/',
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
        path: '/product/:name',
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
    }
])


export default router

