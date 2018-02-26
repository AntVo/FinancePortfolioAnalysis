
module.exports = {

	//		returns a promise object, use .then to access

	fetchStock: function(stockName){
		const date = new Date();
		let year, month, day = "";
		if (date.getMonth() < 11){
			month = "0" + (date.getMonth()+1);
		} else { month = date.getMonth()+1}

		// Handle stock market closed on Sat and Sunday by minusing three days... Temp solution, TODO: actual.
			if (date.getDay() === 0 || date.getDay() === 6){
				if (date.getDate() < 10){
					day = "0" + date.getDate()-3;
				} else { day = date.getDate()-3}
			} else {
				if (date.getDate() < 10){
					day = "0" + date.getDate() ;
				} else { day = date.getDate() }
			}
		year = date.getFullYear();
		const fDate = year + "-" + month + "-" + day;

		let news = {};
		return (
			fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stockName}&outputsize=compact&apikey=09K5196VT2U7BY0F`)
			.then(dataWrappedByPromise => dataWrappedByPromise.json())
			.then(data => {
				return {
					open: data["Time Series (Daily)"][fDate]["1. open"],
					close: data["Time Series (Daily)"][fDate]["4. close"],
				};
			})
			.catch(function(err){
				console.log(err);
			})
		);
	},

	fetchNews: function(query){
		return (fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=b719ab8712f34e61bedaabfb92973e64`)
			.then(dataWrappedByPromise => dataWrappedByPromise.json())
			.then(data => 
					{
						let newsArticles = [];
						for (var i = 0; i < 3; i++){
							let newsItem = {
								source: data.articles[i].source.name,
								description: data.articles[i].description,
							}
							newsArticles.push(newsItem);
						}
						return newsArticles;
					})
			.catch(function(err){
				console.log(err);
			})
		);
	},

	validateStock: function(stockName){
		//to do;
	},

}

// Please don't abuse these API Keys!
//09K5196VT2U7BY0F    => alphavantage.com
//b719ab8712f34e61bedaabfb92973e64   => Newsapi.org
//https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&outputsize=compact&apikey=09K5196VT2U7BY0F 
