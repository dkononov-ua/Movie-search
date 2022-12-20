import {
	addMovieToList,
	createMarkup,
	createStyle,
	moviesList,
	inputSearch,
	triggerMode,
	clearMoviesMarkup
} from './dom.js';

const getData = (url) => {
	return fetch(url)
		.then((res) => res.json())
		.then((data) => data.Search);
}

let searchLLast = null;

const debounce = (() => {
	let timer = null;

	return (cb, ms) => {
		if (timer) {
			clearTimeout(timer)
			timer = null;
		}

		timer = setTimeout(cb, ms);
	}
})();

const inputSearchHandler = (e) => {
	debounce(() => {
		const searchString = e.target.value.trim();

		if (searchString && searchString.length > 3 && searchLLast !== searchString) {

			if (!triggerMode) clearMoviesMarkup(moviesList)

			getData(`http://www.omdbapi.com/?i=tt3896198&apikey=4d447f57&s=${searchString}`)
				.then(movies => movies.forEach(movie => addMovieToList(movie)))
				.catch(console.log);
		}

		searchLLast = searchString

	}, 2000)
}

export const appInit = () => {
	createStyle();
	createMarkup();
	inputSearch.addEventListener('keyup', inputSearchHandler)
}