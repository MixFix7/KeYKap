import React from 'react'
import CountInCart from './../../Home/UI/CountInCart';

const AddProductPage = () => {

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

        addProductonApi(formData)

    }

  return (
    <div className=''>
      <h1>Add Product</h1>
      <form onSubmit={handleFormAddProductToApi}>
        <input type="text" name='category'/>
        <input type="text" name="name"/>
        <input type="number" name="price"/>
        <button className='text-white' type='submit'>add</button>
      </form>
    </div>
  )
}

export default AddProductPage
