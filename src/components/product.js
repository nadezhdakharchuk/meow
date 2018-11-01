import React, { Component } from 'react';

const Product = props => {
  return (
    <div className='products__item'>
      <div className='product-wrapper'>
        <div className='product' onClick={props.click}>
          <div className='product__title'>Сказочное заморское яство</div>
          <div className='product__name'>Нямушка</div>
          <div className='product__taste'>{props.taste}</div>
          <div className='product__weight'>
            <div className='product__value'>{props.weight}</div>
            <div className='product__unit'>кг</div>
          </div>

          <div className='product__description'>
            <p><strong>{props.portions}</strong> порций</p>
            <p><strong>{props.mouse}</strong> мыши в подарок</p>
            {props.additional && <p>{props.additional}</p>}
          </div>
        </div>
      </div>
      
      {props.isSelected ?
        <div className='products-footer'>
          {props.longDescription}
        </div>
        :
        <div className='products-footer'>
          Чего сидишь? Порадуй котэ, <a href="">купи.</a>
        </div>
      }
    </div>
  ) 
};

export default Product;