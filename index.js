const MovieDB = require("moviedb")("1217352f09c7fa5f7527202dc0ad7c4f");
const movie_name = "harry potter";
// any movie you like
// if name is not specific all related movies with name and rating will be consoled
const movies_data = [];
MovieDB.searchMovie({ query: movie_name }, (err, res) => {
  res.results.map((e) => {
    movies_data.push({
      name: e.title,
      rating: e.vote_average,
    });
  });
  movies_data.map((ele) =>
    console.log("name : ", ele.name, "rating :", ele.rating)
  );
});

// Gaurav Mishra
