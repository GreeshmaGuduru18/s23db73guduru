var express = require('express');
var router = express.Router();

// Require controller modules.
var api_controller = require('../controllers/api');
var movies_controller = require('../controllers/movies');
const movies = require('../models/movies');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// MOVIES ROUTES ///
// POST request for creating a movies.
router.post('/movies', movies_controller.movies_create_post);
// DELETE request to delete movies.
router.delete('/movies/:id', movies_controller.movies_delete);
// PUT request to update movies.
router.put('/movies/:id', movies_controller.movies_update_put);
// GET request for one movies.
router.get('/movies/:id', movies_controller.movies_detail);
// GET request for list of all movies items.
router.get('/movies', movies_controller.movies_list);
module.exports = router;t

Handle movies update form on PUT.
exports.movies_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await movies.findById( req.params.id)
// Do updates of properties
if(req.body.movie_name)
toUpdate.movie_name = req.body.movie_name;
if(req.body.director) toUpdate.director = req.body.director;
if(req.body.rating) toUpdate.rating = req.body.rating;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
};