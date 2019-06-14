1.  Explain the differences between `client-side routing` and `server-side routing`.


Server-Side Routing
When we request information from a server, (i.e. a user clicks on a link) and that server then sends back that document that was requested. For example, we click on a link and our URL changes to match the request, then the server goes and finds a template or some html file and sends it back across the world wide web to deliver that content to the user.

Client-Side Routing
Now that we know about how things used to be done in the standard way we can talk about how we handle routing modernly. JavaScript and the tools that we have to work with within JavaScript have gotten super sophisticated. Because of the advent of tools like Google Chrome’s V8 Engine we have the capability to do a lot of things that weren’t possible previously. One of those new patterns is using JavaScript to maintain State or memory within our applications and use that memory to tell the Browser what to display when a resource is requested.

1.  What does HTTP stand for?
HTTP means HyperText Transfer Protocol. HTTP is the underlying protocol used by the World Wide Web and this protocol defines how messages are formatted and transmitted, and what actions Web servers and browsers should take in response to various commands.

For example, when you enter a URL in your browser, this actually sends an HTTP command to the Web server directing it to fetch and transmit the requested Web page. The other main standard that controls how the World Wide Web works is HTML, which covers how Web pages are formatted and displayed.

1.  What does CRUD stand for?

In a REST environment, CRUD often corresponds to the HTTP methods POST, GET, PUT, and DELETE, respectively. These are the fundamental elements of a persistent storage system.

1.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
POST = Create
GET = Read
PUT = Update
DELETE = Delete

1.  Mention three tools we can use to make AJAX requests
a. Fetch API
b. Axios library
c. Jquery API