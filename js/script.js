const numberOfFilms = +prompt('Скільки фільмів вивже подивилися?', '');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

const a = prompt("Останнній фільм який дивилися", ''),
	  b = prompt("На скільки ви його оціните?", ''),
	  c = prompt("Останнній фільм який дивилися", ''),
	  d = prompt("На скільки ви його оціните?", '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);