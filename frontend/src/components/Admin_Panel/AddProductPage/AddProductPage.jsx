import React, { useEffect, useState } from 'react'
import CountInCart from './../../Home/UI/CountInCart';
import axios from 'axios';

const AddProductPage = () => {
  const [categories, SetCategories] = useState([]) 

    const addProductonApi = async (formData) => {
        const response = await fetch('http://localhost:8000/admin-panel/add-product/', {
            method: 'POST',
            body: formData
        })

        if (response.status === 201) console.log("Product has been added successfuly")
    }

    const handleFormAddProductToApi = (e) => {
        e.preventDefault()

        const formData = new FormData()

        formData.append('category', e.target.category.value)
        formData.append('product_name', e.target.name.value)
        formData.append('price', e.target.price.value)
        formData.append('brand', e.target.brand.value)
        formData.append('color', e.target.color.value)
        formData.append('description', e.target.description.value)
        formData.append('keyboard_type', e.target.keyboard_type.value)
        formData.append('switches_name', e.target.switches_name.value)
        formData.append('switches_img', e.target.switches_img.files[0])
        formData.append('lubricated', e.target.lubricated.value)

        addProductonApi(formData)
    }

    const getCategories = async () => {
      const response = await axios.get('http://localhost:8000/api/allCategories/')

        SetCategories(response.data)
        console.log(categories)
      
    }

    useEffect(() => {
      getCategories()
    }, [])
    


  return (
    <div className=''>
      <h1 className='text-white'>Add Product</h1>
      <form onSubmit={handleFormAddProductToApi}>
        <h1 className='text-white'>Category</h1>
        <select name="category">
          {categories.map((category) => (
            <option key={category.id} value={category.category}>{category.category}</option>
          ))}
        </select>
        <h1 className='text-white'>name</h1>
        <input type="text" name="name"/>
        <h1 className='text-white'>price</h1>
        <input type="text" name="price"/>
        <h1 className='text-white'>brand</h1>
        <input type="text" name="brand"/>
        <h1 className='text-white'>description</h1>
        <textarea type="text" name="description"/>
        <h1 className='text-white'>color</h1>
        <input type="text" name="color"/>
        <h1 className='text-white'>keyboard_type</h1>
        <input type="text" name="keyboard_type"/>
        <h1 className='text-white'>switches_name</h1>
        <input type="text" name="switches_name"/>
        <h1 className='text-white'>switches_img</h1>
        <input type="file" name="switches_img"/>
        <h1 className='text-white'>lubricated</h1>
        <input type="text" name="lubricated"/>
        <button className='text-white' type='submit'>add</button>
      </form>
    </div>
  )
}

export default AddProductPage
