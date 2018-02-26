import React, { Component } from 'react';
import StockItem from './stock-item.js';

export default class PortfolioGallery extends Component {


	renderPortfolio = () => {
		const portfolio = this.props.portfolio;
		return (
			portfolio.map((stock, index) => <StockItem key={index} stock={stock} />)
		)

	}

  render() {
    return (
      <table className="portfolio-gallery table">
      	<thead>
      		<tr>
	      		<th>Symbol</th>
	      		<th>News</th>
	      		<th>Open</th>
	      		<th>Close</th>
	      		<th>% </th>
      		</tr>
      	</thead>
      	{this.renderPortfolio()}
      </table>
    );
  }
}
