let moviesList = null;

const createStyle = () => {
const headStyle = document.createElement('style');

headStyle.innerHTML = `*{
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.container {
  padding: 20px;
}

.movies {
  display: grid;
grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}

.movie {
  display: flex;
  justify-content: center;
  align-content: center;
}

.movie__image {
  width: 100%;
  object-fit: cover;
}
`;

document.head.append(headStyle);
}

const createMarkup = () => {
	const container = document.createElement('div');
	const movies = document.createElement('div');

	container.setAttribute('class','container');
	movies.setAttribute('class', 'movies');
	container.append(movies);
	document.body.prepend(container);

	moviesList = document.querySelector('.movies');
};

const addMovieToList = (movie) => {
	const item = document.createElement('div');
	const img = document.createElement('img');


	item.setAttribute('class', 'movie')
	img.setAttribute('class', 'movie__image')
	img.src = movie.Poster;
	img.alt = movie.Title;
	img.title = movie.Title;

	item.append(img);
	moviesList.append(item);

// 	<div class="movie">
// 	<img src="" alt="" class="movie__image">
// </div>


// Title
// : 
// "Iron Man"
}


const getData = (url) => {
	return fetch(url)
	.then((res) => res.json())
	.then((data) => data.Search);
}

const search = 'iron man';

createStyle();
createMarkup();

getData(`http://www.omdbapi.com/?i=tt3896198&apikey=4d447f57&s=${search}`)
.then(movies => movies.forEach(movie => addMovieToList(movie)))
.catch(console.log);