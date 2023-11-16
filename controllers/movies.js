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
exports.movies_update_put = function (req, res) {
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

exports.movies_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await movies.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};


exports.movies_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await movies.findById(req.params.id)
        // Do updates of properties
        if (req.body.movie_name)
            toUpdate.movie_name = req.body.movie_name;
        if (req.body.director) toUpdate.director = req.body.director;
        if (req.body.rating) toUpdate.rating = req.body.rating;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
    }
};

// Handle movies delete on DELETE.
exports.movies_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await movies.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
   };

   // Handle a show one view with id specified by query
exports.movies_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await movies.findById( req.query.id)
    res.render('moviesdetail',
   { title: 'movies Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

   // Handle building the view for creating a movies.
// No body, no in path parameter, no query.
// Does not need to be async
exports.movies_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('moviescreate', { title: 'movies Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

   // Handle building the view for updating a movies.
// query provides the id
exports.movies_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await movies.findById(req.query.id)
    res.render('moviesupdate', { title: 'movies Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

   // Handle a delete one view with id from query
exports.movies_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await movies.findById(req.query.id)
    res.render('moviesdelete', { title: 'movies Delete', toShow:
   result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };