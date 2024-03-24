// callback limitation / callback hell / pyramid of doom
// it depends on another callback / it makes unmaintainable

// // example pyramid of doom
// fetchData((data) => {
// 	processA(data, (resultA) => {
// 		processB(resultA, (resultB) => {
// 			processC(resultB, (resultC) => {
// 				processD(resultC, (resultD) => {
// 					processE(resultD, (resultE) => {
// 						processF(resultE, (resultF) => {
// 							processG(resultF, (resultG) => {
// 								// processH ... and so on
// 							});
// 						});
// 					});
// 				});
// 			});
// 		});
// 	});
// });

// the solution for asynchronous function
// Promise // pending // fulfilled // rejected
// new Promise take one callback function argument which is take two parameters // resolve // reject

// example new Promise chaining using .then ... .catch
function downloadImage(url) {
	return new Promise(function (resolve, reject) {
		// example download function
		const image = download(url);
		if (image) resolve(image);
		else reject("Download failed. URL is not accepted. Try again!");
	});
}
downloadImage("some url with http/https")
	.then(function (image) {
		// do something with image (make it black & white using a function)
		return blackWhiteImage;
	})
	.then(function (image) {
		// do something with black & white image (other function)
	})
	.then(function (image) {
		// do something with black & white image (other function)
	})
	.catch(function (error) {
		// do something if the method .then error
		console.log("error"); // error
	});

// Promise static method // Promise.all() // Promise.any() // Promise.racè()

// example Promise.all() / running more than one Promise simultaneously
const promise1 = Promise.resolve("A");
const promise2 = "B";
const promise3 = new Promise((resolve, reject) => {
	setTimeout(resolve, 1000, "C");
});
Promise.all([promise1, promise2, promise3]).then((values) => {
	console.log(values); // ['A', 'B', 'C']
});

// example Promise.any() / running the fast and the first resolve one Promise
const promiseI = Promise.reject(0); // the reject one Promise
const promiseII = new Promise((resolve) => {
	setTimeout(resolve, 3000, "the slow");
});
const promiseIII = new Promise((resolve) => {
	setTimeout(resolve, 1000, "the fast");
});
const promises = [promiseI, promiseII, promiseIII];
Promise.any(promises).then((value) => {
	console.log(value); // the fast
});

// example Promise.racè() / running the fast one Promise
const promiseA = Promise.reject(0); // the reject one Promise
const promiseB = new Promise((resolve) => {
	setTimeout(resolve, 5000, "5 Second delay");
});
const promisesAB = [promiseA, promiseB];
Promise.race(promisesAB)
	.then((value) => {
		console.log(value);
	})
	.catch(function (error) {
		console.log("No Delay"); // No Delay
	});
