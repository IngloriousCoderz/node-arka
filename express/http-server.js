const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/tasks") {
    res.end(
      JSON.stringify([
        { id: 1, text: "Learn Node.js", completed: true },
        { id: 2, text: "Look for a job", completed: false },
        { id: 3, text: "Forget everything" },
      ])
    );
  } else {
    res.end("Hello world!");
  }
});

server.listen(3000, () => {
  console.log("Server is listening!");
});
