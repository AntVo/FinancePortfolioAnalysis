
//09K5196VT2U7BY0F
//https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&outputsize=compact&apikey=09K5196VT2U7BY0F 

module.exports = {

	fetchStockHigh: function(stock){
		return (
			fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stock}&outputsize=compact&apikey=09K5196VT2U7BY0F`)
			.then(dataWrappedByPromise => dataWrappedByPromise.json())
			.then(data => {
				console.log(data);
			})
			.catch(function(err){
				console.log(err);
			})
		);
	},

	fetchOneDayPercentChange: function(stock){

	},

	fetchOneWeekPercentChange: function(stock){

	},

	fetchOneMonthPercentChange: function(stock){

	},


}