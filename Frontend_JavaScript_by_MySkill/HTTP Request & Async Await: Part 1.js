// HTTP / Hyper Text Transfer Protocol / as a communicator between client (web browser) and server
// client -> request -> send -> server -> response
// client (user-agent) // server (data saved) // proxy (computer)
// proxy (computer) can proccess caching, authentication, or logging

// HTTP request method
// GET / request to get data from server
// POST / request to new send data to server
// PUT/PATCH / request to change some/all current data in server
// DELETE / request to delete current saved data in server

// HTTP request method component
// Method / ex: GET, POST, PUT/PATCH, DELETE
// Target / ex: url
// Header / ex: additional information
// Body / ex: POST, PUT/PATCH, DELETE

// example HTTP GET request
// GET /index.html HTTP/1.1
// User-Agent: Mozilla/4.0
// Host: www.myskill.id
// Accept-Language: en-us
// Accept-Encoding: gzip, deflate
// Connection: Keep-Alive

// HTTP response status
// 200: OK
// 201: CREATED
// 204: NO CONTENT
// 400: BAD REQUEST
// 401: UNAUTHORIZED
// 404: NOT FOUND
// 500: INTERNAL SERVER ERROR
// 503: SERVICE UNAVAILABLE
// 504: GATEWAY TIMEOUT
// 100-199: response information
// 200-299: response success
// 300-399: response redirect
// 400-499: error from client
// 500-599: error from server
