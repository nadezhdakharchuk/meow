import React, { Component } from 'react';
import Product from './components/product'

class App extends Component {
  state = {
    products: [
      { 
        id: 'foie-gras',
        isSelected: false,
        taste: 'с фуа-гра', 
        weight: '0,5',
        portions: 10,
        mouse: 1,
        longDescription: 'Печень утки разварная с артишоками.',
      },      
      { 
        id: 'fish',
        isSelected: false,
        taste: 'с рыбой', 
        weight: '2',
        portions: 40,
        mouse: 2,
        longDescription: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
      },
      { 
        id: 'hen',
        isSelected: false,
        taste: 'с курой', 
        weight: '5',
        portions: 100,
        mouse: 5,
        longDescription: 'Филе из цыплят с трюфелями в бульоне.',
        additional: 'заказчик доволен',
      },
    ],
  };

  handleSelect = (event, id) => {
    const productIndex = this.state.products.findIndex(p => {
      return p.id == id;
    });

    const product = {
      ...this.state.products[productIndex]
    };

    if (product.isSelected ) {
      product.isSelected = false;
    } else {
      product.isSelected = true;
    }
    
    const products = [...this.state.products];
    products[productIndex] = product;
    this.setState({products: products});
  }

  render() {
    let products = null;

    products =  (
      <div className='products'>
        {this.state.products.map((product, index) => {
          return <Product
            taste={product.taste}
            weight={product.weight}
            portions={product.portions}
            mouse={product.mouse}
            isSelected={product.isSelected}
            additional={product.additional}
            longDescription={product.longDescription}
            click={(event) => this.handleSelect(event, product.id)}
            key={product.id} />
        })}
      </div>
    )

    return (
      <div className='wrapper'>
        <h1>Ты сегодня покормил кота?</h1>
        {products}
      </div>
    );
  }
}

export default App;
