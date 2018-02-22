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
		portfolio.push(stockName);
		this.setState({ portfolio: portfolio });
	}

	componentDidMount(){
		let promise = api.fetchStockHigh('MSFT');
		promise.then(data => {
			console.log(data);
		})
	}

  render() {
    return (
      <div className="app">
      	<AddStock addStockToPortfolio={this.addStockToPortfolio} />
      	<PortfolioGallery />
      </div>
    );
  }
}

//09K5196VT2U7BY0F