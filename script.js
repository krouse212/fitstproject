const numberOfFilms = + prompt('Сколько фильмов Вы посмотрели', '');
let personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
    };

personalMovieDB.movies.first = prompt('Один из последних просмотреных фильмов', '')
personalMovieDB.genres.first = prompt('На сколько оцените его?', '')

personalMovieDB.movies.second = prompt('Один из последних просмотреных фильмов', '')
personalMovieDB.genres.second = prompt('На сколько оцените его?', '')

console.log(personalMovieDB.movies.first + " " + personalMovieDB.genres.first)
console.log(personalMovieDB.movies.second + "  " + personalMovieDB.genres.second)