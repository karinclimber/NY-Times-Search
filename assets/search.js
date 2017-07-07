var q
var begin_date
var end_date
var sort



var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
queryUrl += '?' + $.param({
	'api-key': "48a4be7acc7344319bd90c8d78a89c08",
	'q': q,
	'begin_date': begin_date,
	'end_date': end_date,
});
$.ajax({
	url: queryUrl,
	method: "GET",
}).done(function(response) {
	console.log(response);
});
console.log("test")