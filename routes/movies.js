const express = require('express');
const movies_controlers= require('../controllers/movies');
const router = express.Router();

// Sample data for movies
const moviesData = [
  { movie_name: 'pookri', director: 'puri', rating: 4.5 },
  { movie_name: 'bhubali', director: 'mouli', rating: 4.2 },
  { movie_name: 'dookudu', director: 'sreenu', rating: 4.9 },
  // Add more movies data here
];

router.get('/', (req, res) => {
  // Render the 'movies' Pug template with the movies data
  res.render('movies', { title: 'Search Results - Movies', results: moviesData });

});

/* GET home page. */
router.get('/', movies_controlers.movies_view_all_Page);
router.get('/movies/:id', movies_controlers.movies_detail);
module.exports = router;

