// const getData = (url) => new Promise((resolve, reject) => {
// 		const xhr = new XMLHttpRequest();

// 		xhr.open('GET', url);
// 		xhr.send();
// 		xhr.onload = () => {
// 			if (xhr.status !== 200) {
// 	reject({
// 		xhrStatus: xhr.status,
// 		xhrStatusText: xhr.statusText
// 	});
// 				return;
// 			}
// 			const json = JSON.parse(xhr.response)
// 			resolve(json.Search)
// 			console.log(json.Search)
// 		};
// 		xhr.onerror = (err) => console.log(err);
// 	});

// const search = 'iron man';

// getData(`http://www.omdbapi.com/?i=tt3896198&apikey=4d447f57&s=${search}`);

const getData = (url) => {
	return fetch(url)
	.then((res) => res.json())
	.then((data) => data.Search);
}

const search = 'iron man';

getData(`http://www.omdbapi.com/?i=tt3896198&apikey=4d447f57&s=${search}`)
.then(console.log)
.catch(console.log);