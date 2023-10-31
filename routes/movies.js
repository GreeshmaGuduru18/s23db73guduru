const express = require('express');
const router = express.Router();

// Sample data for restaurants
const moviesData = [
  { restaurant_name: 'pookri', director: 'puri', rating: 4.5 },
  { restaurant_name: 'bhubali', director: 'mouli', rating: 4.2 },
  { restaurant_name: 'dookudu', director: 'sreenu', rating: 4.9 },
  // Add more restaurant data here
];

router.get('/', (req, res) => {
  // Render the 'restaurants' Pug template with the restaurant data
  res.render('movies', { title: 'Search Results - Movies', results: moviesData });

});

module.exports = router;