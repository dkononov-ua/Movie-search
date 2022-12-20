export let moviesList = null;

const createElement = ({
	type,
	attr,
	container = null,
	position = 'append',
	evt,
	handler
}) => {
	const el = document.createElement(type);
	for (const key in attr) {
		el.setAttribute(key,attr[key]);
	}

	container.append(el);
	// ? prepend

	return el;
}

export const createStyle = () => {
const headStyle = document.createElement('style');

headStyle.innerHTML = `
*{
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

export const createMarkup = () => {
	const container = document.createElement('div');
	const movies = document.createElement('div');

	container.setAttribute('class','container');
	movies.setAttribute('class', 'movies');
	container.append(movies);
	document.body.prepend(container);

	moviesList = document.querySelector('.movies');
};

export const addMovieToList = (movie) => {
	const item = createElement({
		type: 'div',
		attr: {class: 'movie'},
		container: moviesList
	});

	createElement({
		type:'img', 
		attr: {
		  class: 'movie__image',
		  src: /(http|https):\/\//i.test(movie.Poster) ? movie.Poster : 'assets\img\no_image.png',
		  alt: movie.Title,
		  title: movie.Title
		},
		container: item
	});
}