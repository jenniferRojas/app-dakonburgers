import React, { useContext } from 'react';
import { CartContext } from '../../App';
import {
  ProductsContainer,
  ProductWrapper,
  ProductsHeading,
  ProductTitle,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductDesc,
  ProductPrice,
  ProductButton
} from './ProductsElements';
import accounting from 'accounting'



const Products = ({ heading, data, useCart }) => {
  const { addToCart} = useContext(CartContext)
  return (
    <ProductsContainer>
      <ProductsHeading>{heading}</ProductsHeading>
      <ProductWrapper>
        {data.map((product, index) => {
          return (
            <ProductCard key={index}>
              <ProductImg src={product.img} alt={product.alt} />
              <ProductInfo>
                <ProductTitle>{product.name}</ProductTitle>
                <ProductDesc>{product.Desc}</ProductDesc> 

                <ProductPrice>{accounting.formatMoney(product.Price,'$',0,".")}</ProductPrice>
                <ProductButton onClick={()=> addToCart(product.ID)}>{product.button }</ProductButton>
              </ProductInfo>
            </ProductCard>
          );
        })}
      </ProductWrapper>
    </ProductsContainer>
  );
};

export default Products;