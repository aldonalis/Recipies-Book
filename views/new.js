// button
var add = document.getElementById("add");

var input = document.querySelector("#ingredient");
var displayResult = document.querySelector("#display_result");
var a = document.getElementById("quantity").selectedIndex;
var b = document.getElementById("quantity").selectedOptions;
 // b[a].index 
var x = document.getElementById("units").selectedIndex;
var y = document.getElementById("units").selectedOptions;
 // y[x].index 

add.addEventListener("click", function() {
	displayResult.textContent = b[a].value + ' ' + y[x].value + input.value;
})

