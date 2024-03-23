// JavaScript by default is using synchronous / call stack or single threaded
// when JavaScript running set of instructions, it reads one by one, it must finish one instruction before moves to another instruction
// so this is why asynchronous is needed

// asynchronous function in JavaScript (runtime environment of web browser) using standard function from Web API
// event loop + call stack + queue stack

// callback asynchronous function
// event loop + call stack + callback queue

// example addEventListener() from Web API
console.log("Contoh Penggunaan callback asynchronous function menggunakan addEventListener() ada di file index.html");

// example function setTimeout() from Web API
console.log("Contoh Penggunaan callback asynchronous function menggunakan function setTimeout() ada di bawah ini :");
function logAfter4Sec() {
	console.log("Kode Baris ke-1");
}
console.log("Kode Baris ke-2");
setTimeout(logAfter4Sec, 4000);
console.log("Kode Baris ke-3");

// example function setTimeout() from Web API
function logAfter5Second() {
	console.log("'Pesanan Selesai. Selamat Menikmati!'");
}
console.log("'Halo, sebentar lagi pesananmu akan dihidangkan ya.'");
setTimeout(logAfter5Second, 5000);
console.log("'Pesananmu akan tiba dalam 5 detik...'");
