// Fetch Web API for HTTP request

// example GET To Do id:1 from typicode
fetch("https://jsonplaceholder.typicode.com/todos/1", { method: "GET" })
	.then((response) => response.json())
	.then((parsedData) => console.log(parsedData)); // {userId: 1, id: 1, title: 'delectus aut autem', completed: false}

// example GET To Do id:2 from typicode
const resourceRandom = "https://jsonplaceholder.typicode.com/todos/2";
const optionsRandom = { method: "GET" };
fetch(resourceRandom, optionsRandom)
	.then((response) => response.json())
	.then((parsedData) => console.log(parsedData)); // {userId: 1, id: 2, title: 'quis ut nam facilis et officia qui', completed: false}

// example GET To Do from typicode
const resource = "https://jsonplaceholder.typicode.com/todos";
const optionsGET = { method: "GET" };
fetch(resource, optionsGET)
	.then((response) => response.json())
	.then((parsedData) => console.log(parsedData)); // (200) [{...}, {...}, ...]

// example POST To Do to typicode
const optionsPost = {
	method: "POST",
	body: JSON.stringify({
		title: "to do tambahan",
		completed: true,
		userId: 2024,
	}),
};
fetch(resource, optionsPost)
	.then((response) => response.json())
	.then((parsedData) => console.log(parsedData))
	.catch((error) => console.log("example error", error)); // {id: 201}

// async function

// example async function
async function getListToDo() {
	const response = await fetch("https://jsonplaceholder.typicode.com/todos", { method: "GET" });
	const parsedData = await response.json();
	console.log(parsedData); // (200) [{...}, {...}, ...]
}
getListToDo();

// example async function // try // catch
async function getListToDo2() {
	try {
		const response = await fetch("https://jsonplaceholder.typicode.com/exampleInfalidURL", { method: "GET" });
		const parsedData = await response.json();
		console.log(parsedData);
	} catch (error) {
		console.log("example error", error); // {} // GET https://jsonplaceholder.typicode.com/exampleInfalidURL 404
	}
}
getListToDo2();
