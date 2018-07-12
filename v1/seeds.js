var mongoose = require("mongoose");
var recipe = require("./models/recipe");
var Comment = require("./models/comment");

var data = [
	{
		title: "Raspberry tart",
		image: "https://images.unsplash.com/photo-1468218620578-e8d78dcda7b1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3a5059887a3bc43a5865adfe2ea60b80&auto=format&fit=crop&w=750&q=800",
		description: "typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		prep_time: 60,
		cooking_time: 25,
		kcal: 144,
		vegetarian: "Yes",
		vegan: "No",
		glutenFree: "No",
		dairyFree: "Yes",
		serves: 8,
		ingredient: [
			"185 g unsalted butter",
			"10 g best dark chocolate",
			"185 g unsalted butter",
			"10 g best dark chocolate",
			"185 g unsalted butter",
			"10 g best dark chocolate",
			"185 g unsalted butter",
			"10 g best dark chocolate"
		], 
		method: "typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsumtypesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsumtypesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsumtypesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsumtypesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsumtypesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
	},
	{
		title: "Breakfast pancakes",
		image: "https://images.unsplash.com/photo-1480889856166-56e89b80386c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cd9963f49ded71c7c90313514e4733d3&auto=format&fit=crop&w=750&q=80",
		description: "into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		prep_time: 60,
		cooking_time: 25,
		kcal: 144,
		vegetarian: "Yes",
		vegan: "No",
		glutenFree: "No",
		dairyFree: "Yes",
		serves: 8,
		ingredient: [
			"185 g unsalted butter",
			"10 g best dark chocolate",
			"185 g unsalted butter",
			"10 g best dark chocolate",
			"185 g unsalted butter",
			"10 g best dark chocolate",
			"185 g unsalted butter",
			"10 g best dark chocolate"
		], 
		method: "typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsumtypesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsumtypesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsumtypesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsumtypesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsumtypesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
	},
	{
		title: "Tomato soup",
		image: "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=276d14007ee259c09679884e9981fdca&auto=format&fit=crop&w=500&q=60",
		description: "ctronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		prep_time: 60,
		cooking_time: 25,
		kcal: 144,
		vegetarian: "Yes",
		vegan: "No",
		glutenFree: "No",
		dairyFree: "Yes",
		serves: 8,
		ingredient: [
			"185 g unsalted butter",
			"10 g best dark chocolate",
			"185 g unsalted butter",
			"10 g best dark chocolate",
			"185 g unsalted butter",
			"10 g best dark chocolate",
			"185 g unsalted butter",
			"10 g best dark chocolate"
		], 
		method: "typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsumtypesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsumtypesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsumtypesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsumtypesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsumtypesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

	},
	{
		title: "Best Brownie BBC",
		image: "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--1001464_11.jpg?itok=Va_PfXJj",
		description: "A foolproof brownie recipe for a squidgy chocolate bake. Watch our recipe video to help you get a perfect traybake every time.",
		prep_time: 60,
		cooking_time: 25,
		kcal: 144,
		vegetarian: "Yes",
		vegan: "No",
		glutenFree: "No",
		dairyFree: "Yes",
		serves: 8,
		ingredient: [
			"185 g unsalted butter",
			"10 g best dark chocolate",
			"185 g unsalted butter",
			"10 g best dark chocolate",
			"185 g unsalted butter",
			"10 g best dark chocolate",
			"185 g unsalted butter",
			"10 g best dark chocolate"
		], 
		method: "typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsumtypesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsumtypesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsumtypesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsumtypesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsumtypesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
	}
];

function seedDB() {
	// Remove all recipes
	recipe.remove({}, function(err) {
		if (err) {
			console.log(err);
		} else {
			console.log("Removed all recipes!");
			// Add new recipes
			data.forEach(function(seed) {
				recipe.create(seed, function(err, recipe) {
					if (err) {
						console.log(err);
					} else {
						console.log("Added new recipes!");
						Comment.create(
							{
								author: "Harry Potter",
								text: "This recipe is amazing! I will recommend it to Hogwart's kitchen chef! typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem his recipe is amazing! I will recommend it to Hogwart's kitchen chef! typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsuhis recipe is amazing! I will recommend it to Hogwart's kitchen chef! typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsuhis recipe is amazing! I will recommend it to Hogwart's kitchen chef! typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem IpsuIpsum "
							}, function(err, comment) {
								if (err) {
									console.log(err);
								} else {
									recipe.comments.push(comment);
									recipe.save();
									console.log("Created new comment!");
								}
							});
					}
				});
			});
		}
	});
}

module.exports = seedDB;