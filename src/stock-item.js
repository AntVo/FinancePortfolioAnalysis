import React, { Component } from 'react';

export default class StockItem extends Component {



  render() {
  	const { open, close, symbol, news } = this.props.stock;
 		const description1 =   news[0].source + ':   ' + news[0].description;
  	const percent = ((parseFloat(open)-parseFloat(close)) / parseFloat(open) * 100).toFixed(2);
  	const styles = (percent > 0) ? { color: 'lightgreen' } : { color: 'red'};
    return (
    		<tbody>
    			<tr>
	      	<th>{symbol}</th>
	      	<th>{description1}</th>
	      	<th>{open}</th>
	      	<th>{close}</th>
	      	<th style={styles}>{percent}</th>
	      	</tr>
	      </tbody>
    );



  }

}