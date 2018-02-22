import React, { Component } from 'react';


export default class PortfolioGallery extends Component {

	renderPortfolio = () => {
		return (<div>hi</div>);
	}

  render() {
    return (
      <div className="portfolio-gallery">
      	{this.renderPortfolio()}
      </div>
    );
  }
}