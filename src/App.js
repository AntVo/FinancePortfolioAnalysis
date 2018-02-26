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
			portfolio: [], // holds stocks{open, close, news, symbol}
		}
	}

	addStockToPortfolio = (stockName) => {
		const portfolio = this.state.portfolio;
		// TODO; GET STOCK % change, %sentiment analysis, other data. Make a stock object and push it to the portfolio!
		let promise = api.fetchStock(stockName);
		let promise2 = api.fetchNews(stockName);
		let stock = {};

		promise.then(data => stock = data)
		.then((res) => {
				promise2.then(data2 => stock.news = data2);
		})
		.then((res) => stock.symbol = stockName)
		.then((res) => portfolio.push(stock))
		.then((res) => this.setState({ portfolio: portfolio }));
	}

	componentDidMount(){
		this.addStockToPortfolio('GOOGL');
	}

  render() {
    return (
      <div className="app">
      	<h1 class="title">Financial Portfolio</h1>
      	<AddStock addStockToPortfolio={this.addStockToPortfolio} />
      	<PortfolioGallery portfolio={this.state.portfolio} />
      </div>
    );
  }
}

//09K5196VT2U7BY0F