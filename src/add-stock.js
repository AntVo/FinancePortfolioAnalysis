import React, { Component } from 'react';

export default class AddStock extends Component {

  handleSubmit = (event) => {
    event.preventDefault();
    const stock = (this.refs.stock.value);
    this.props.addStockToPortfolio(stock);
    event.target.reset();
  }  

  renderForm = () => {
    return (
      <form className="field has-addons" onSubmit={this.handleSubmit}>
        <input className="input" type="text" placeholder="Input a Stock (ex: AMZN)" ref="stock"></input>
        <input className="button is-success" type="submit"></input>
      </form>
    );
  }

  render() {
    return (
      <div className="stock-searchbar">
      	{this.renderForm()}
      </div>
    );
  }
}