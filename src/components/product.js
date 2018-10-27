import React, { Component } from 'react';

const Product = props => (
  <div className="product">
    <div className="product-content">
      <div className="product__title">Сказочное заморское</div>
      <div className="product__name">Нямушка</div>
      <div className="product__taste">с фуа-гра</div>
      <div className="product__weight">
        <div className="product__value">0,5</div>
        <div className="product__unit">кг</div>
      </div>

      <div className="product__description">
        <p><strong>40</strong> порций</p>
        <p><strong>2</strong> мыши в подарок</p>
        <p>заказчик доволен</p>
      </div>
    </div>
  </div>
);

export default Product;