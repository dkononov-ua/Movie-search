export let moviesList = null;
export let inputSearch = null;
export let triggerMode = false;

const createElement = ({
	type,
	attr,
	container = null,
	position = 'append',
	evt,
	handler
}) => {
	const el = document.createElement(type);

Object.keys(attr).forEach((key) => {
	if (key !== 'innerHTML') el.setAttribute(key, attr[key]);
	else el.innerHTML = attr[key];
})

	if (container && position === 'append') container.append(el);
	if (container && position === 'prepend') container.prepend(el);
	if (evt && handler && typeof handler === 'function')	el.addEventListener(evt, handler);

	return el;
}

export const createStyle = () => {
createElement({
	type:'style',
	attr: {
		innerHTML: `
		* {
			box-sizing: border-box;
		}
		
		body {
			margin: 0;
			font-family: Arial, Helvetica, sans-serif;
		}
		
		.container {
			width: min(100% - 40px, 1280px);
			margin-inline: auto;
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
		
		.search {
			margin-bottom: 30px;
		}
		
		.search__label-input {
			display: block;
			margin-bottom: 7px;
		}
		
		.search__input {
		display: block;
		min-width: 400px;
		width: 100%;
		padding: 10px 15px;
		margin-bottom: 10px;
		border: 1px solid lightblue;
		}
		
		.search__lable-checkbox {
		font-size: 12px;
		display: inline-block;
		transform: translate(7px, -2px);
		}
		`
	},
	container: document.head
});
};

export const createMarkup = () => {
	const container = createElement({
		type: 'div',
		attr: {class: 'container'},
		container: document.body,
		position: 'prepend'
	});

	createElement({
		type: 'h1',
		attr: {innerHTML: 'Додаток для пошуку фільмів'},
		container
	})

	const searchBox = createElement ({
		type: 'div',
		attr: {class: 'search'},
		container
	});

	const inputBox = createElement ({
		type: 'div',
		attr: {class: 'search__group search__group--input'},
		container: searchBox
	});

	const checkbox = createElement ({
		type: 'div',
		attr: {class: 'search__group search__group--checkbox'},
		container: searchBox
	});

	createElement({
		type: 'label',
		attr: {
			class: "search__label-input",
			for:"search",
			innerHTML: 'Пошук фільмів',
		},
		container: inputBox
	});

	inputSearch = createElement({
		type: 'input',
		attr: {
			class: "search__input",
			id:"search",
			type: 'search',
			placeholder: 'Введіть що хочете дивитись...',
		},
		container: inputBox
	});

	createElement({
		type: 'input',
		attr: {
			class: "search__checkbox",
			id:"checkbox",
			type: 'checkbox'
		},
		container: checkbox,
		evt: 'click',
		handler: () => triggerMode = !triggerMode
	});

	createElement({
		type: 'label',
		attr: {
			class: "search__lable-checkbox",
			for:"checkbox",
			innerHTML: 'Додавати фільми до інснуючих списків',
		},
		container: checkbox
	});

	const movies = createElement({
		type:'div',
		attr: {class: 'movies'},
		container
	});

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
			src: /(http|https):\/\//i.test(movie.Poster) ? movie.Poster : 'assets/img/no-image.png',
			alt: movie.Title,
			title: movie.Title
		},
		container: item
	});
};

export const clearMoviesMarkup = (el) => el && (el.innerHTML = '');