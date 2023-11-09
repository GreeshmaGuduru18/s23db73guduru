const mongoose = require("mongoose")
const moviesSchema = mongoose.Schema({
movie_name: {
    type: String,
    required:true,
    minLength:4,
    maxLength:25
   
},
director: String,
rating: {
    type:Number,
    required:true,
    min:0,
    max:10000
}
    
})
module.exports = mongoose.model("movies",
moviesSchema)