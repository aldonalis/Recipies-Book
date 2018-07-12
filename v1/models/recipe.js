var mongoose = require("mongoose");

// MONGOOSE/MODEL CONFIG
var recipeSchema = new mongoose.Schema({
    title: String,
    image: String,
    description: String,
    prep_time: Number,
    cooking_time: Number,
    kcal: Number,
    vegeterian: String,
    vegan: String,
    glutenFree: String,
    dairyFree: String,
    serves: Number,
    ingredient: [String],
    comments: [
   		{
   			type: mongoose.Schema.Types.ObjectId,
   			ref: "Comment"
   		}
    ], 
    method: String
});

module.exports = mongoose.model("Recipe", recipeSchema);