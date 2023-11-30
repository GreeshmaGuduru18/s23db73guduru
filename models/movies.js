const mongoose = require("mongoose");

const moviesSchema = mongoose.Schema({
    movie_name: {
        type: String,
        required: true,
        minLength: 4,
        maxLength: 10
    },
    director: {
        type: String,
        required: true,
        minlength: 0,
        maxlength: 5
    },
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5
    }
});

module.exports = mongoose.model("movies", moviesSchema);