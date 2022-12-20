const getData = (url) => {
	const xhr = new XMLHttpRequest();

	xhr.open('GET', url);
	xhr.send();
	xhr.onload = () => {
		//onsuccsesss
	};
	xhr.onerror = (err) => console.log(err);
}

const search = 'iron man';

getData(`http://www.omdbapi.com/?i=tt3896198&apikey=4d447f57&s=${search}`);