var movies = require('../models/movies');

// List of all movies
exports.movies_list = async function (req, res) {
    try {
        theMovies = await movies.find();
        res.send(theMovies);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// VIEWS
// Handle a show all view
exports.movies_view_all_Page = async function (req, res) {
    try {
        themovies = await movies.find();
        res.render('movies', { title: 'movies Search Results', results: themovies });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// // List of all Movies
// exports.movies_list = function(req, res) {
//     res.send('NOT IMPLEMENTED: Movies list');
// };

// for a specific Movies.
exports.movies_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: movies detail: ' + req.params.id);
};

// // Handle Movies create on POST.
// exports.movies_create_post = function (req, res) {
//     res.send('NOT IMPLEMENTED: movies create POST');
//  };

  // Handle Movies delete form on DELETE.
exports.movies_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: movies delete DELETE ' + req.params.id);
};

// Handle Movies update form on PUT.
exports.movies_update_put = function(req, res) {
    res.send('NOT IMPLEMENTED: movies update PUT' + req.params.id);
};

// Handle movies create on POST.
exports.movies_create_post = async function (req, res) {
    console.log(req.body)
    let document = new movies();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {movie_name: 'pookri', director: 'puri', rating: 4.5}
    document.movie_name = req.body.movie_name;
    document.director = req.body.director;
    document.rating = req.body.rating;
    try {
        let result = await document.save();
        console.log(result);
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};