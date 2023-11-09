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
module.exports = router;