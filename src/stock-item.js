import React, { Component } from 'react';

export default class StockItem extends Component {


  render() {
    return (
      <div className="stock-item">
      	{this.props.stock}
        hi
      </div>
    );
  }
}