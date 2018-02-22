import React, { Component } from 'react';
import StockItem from './stock-item.js';

export default class PortfolioGallery extends Component {


	renderPortfolio = () => {
		const portfolio = this.props.portfolio;
		console.log(portfolio);
		return (
			portfolio.map((stock, index) => <StockItem key={index} stock={stock} />)
		)

	}

  render() {
    return (
      <div className="portfolio-gallery">
      	{this.renderPortfolio()}
      </div>
    );
  }
}