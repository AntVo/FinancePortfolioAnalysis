import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import * as api from './api.js';
import PortfolioGallery from './portfolio-gallery.js';
import AddStock from './add-stock.js';

export default class App extends Component {

	constructor(props){
		super();
		this.state ={
			portfolio: [],
		}
	}

	addStockToPortfolio = (stockName) => {
		const portfolio = this.state.portfolio;
		let stock = {};
		// TODO; GET STOCK % change, %sentiment analysis, other data. Make a stock object and push it to the portfolio!
		let promise = api.fetchStock(stockName);
		promise.then(data => stock = data)
		.then((res) => portfolio.push(stock))
		.then((res) => this.setState({ portfolio: portfolio }));
	}

	componentDidMount(){
		// let promise = api.fetchStockHigh('MSFT');
		// promise.then(data => {
		// 	console.log(data);
		// })
	}

  render() {
    return (
      <div className="app">
      	<AddStock addStockToPortfolio={this.addStockToPortfolio} />
      	<PortfolioGallery portfolio={this.state.portfolio} />
      </div>
    );
  }
}

//09K5196VT2U7BY0F