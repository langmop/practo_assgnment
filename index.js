const MovieDB = require("moviedb")("1217352f09c7fa5f7527202dc0ad7c4f");
const movie_name = process.argv[2] || "harry potter";
// if no name given while running using node index.js "any name " harry potter is default
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
console.log(
  movie_name == "harry potter"
    ? "give input as node index.js <any name> for other than harry potter \n"
    : movie_name
);
// Gaurav Mishra
