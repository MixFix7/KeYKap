import React, { Children } from 'react'
import style from './../../../static/project.module.css'
import Product from './Product';


const ProductContainer = ({json}) => {
  console.log(json)
  return (
    <>
      <div className={style.productContainer}>
        {json.map((category) => (
          <div key={category.id}>
            <h1 className='text-white text-5xl bg-zinc-900 p-2 rounded-3xl'>{category.category}</h1>
            <div className='flex'>
              {category.products.length > 0 ? (
                category.products.map((product) => (
                  <Product
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    img1={product.photos[0].photo}
                    img2={product.photos[1].photo}
                    price={product.price}
                  />
                ))
              ) : (
                <h1 className='text-white'>No products available</h1>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
  
  
  
  
}  
  
export default ProductContainer;

