import React, { Component } from 'react';
import Product from './components/product'

class App extends Component {
  render() {
    return (
      <div className="products-wrapper">
        <h1>Ты сегодня покормил кота?</h1>
          <div className="products">
            <Product></Product>
            <Product></Product>
            <Product></Product>
          </div>
      </div>
    );
  }
}

export default App;
