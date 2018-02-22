
//09K5196VT2U7BY0F
//https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&outputsize=compact&apikey=09K5196VT2U7BY0F 

module.exports = {


	//		returns a promise object, use .then to access
	fetchStockHigh: function(stock){

		//get formatted date, store in fDate
		const date = new Date();
		let year, month, day = "";
		if (date.getMonth() < 11){
			month = "0" + (date.getMonth()+1);
		} else { month = date.getMonth()+1}
		if (date.getDate() < 10){
			day = "0" + date.getDate();
		} else { day = date.getDate()}
		year = date.getFullYear();
		const fDate = year + "-" + month + "-" + day;

		return (
			fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stock}&outputsize=compact&apikey=09K5196VT2U7BY0F`)
			.then(dataWrappedByPromise => dataWrappedByPromise.json())
			.then(data => {
				return data["Time Series (Daily)"][fDate]["2. high"];
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

	validateStock: function(stock){

	},

}