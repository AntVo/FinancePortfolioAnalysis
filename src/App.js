import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import * as api from './api.js'

export default class App extends Component {

	constructor(props){
		super();
		this.state ={
			data: null,
		}
	}

	componentDidMount(){
		let promise = api.fetchStockHigh('MSFT');

		promise.then(data => {
			console.log(data);
		})
	}

  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

//09K5196VT2U7BY0F