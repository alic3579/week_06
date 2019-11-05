fetch('https://alic3579.github.io/week_06/assets/my.json')
.then(function(results){
	return results.json()
})
.then(function(jsonResults){

	console.log("results: ", jsonResults)

	document.querySelector("#root").insertAdjacentHTML('afterbegin', `
		<h1 style="font-family: Arial, Helvetica, sans-serif;
		color:rgb(${jsonResults.color});">${jsonResults.title}</h1> 
	`)

})
.catch(function(error){
	console.log("error message:", error)
})


fetch('https://api.kanye.rest/')
.then(function(results){
	return results.json()
})
.then(function(jsonResults){

	console.log("Kanye quote: ", jsonResults)
	document.querySelector("#quote").insertAdjacentHTML('afterbegin',`
		<h2 style="font-family: Arial, Helvetica, sans-serif;"> "${jsonResults.quote}" by Kanye West </h2>
		`)


})
.catch(function(error){
	console.log("error message:", error)
})