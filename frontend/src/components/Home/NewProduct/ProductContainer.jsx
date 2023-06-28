import React, { Children } from 'react'
import style from './../../../static/project.module.css'
import Product from './Product';


const ProductContainer = ({json}) => {
    return (
      <div className={style.productContainer}>
        {json.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            name={product.name}
            img={product.photos[0].photo}
          />
        ))}
      </div>
    );
  };
  
export default ProductContainer;

