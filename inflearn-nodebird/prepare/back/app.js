const PORT = 3065;
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Node");
});

app.get("/api", (req, res) => {
  res.send("Hello Api");
});

app.get("/api/posts", (req, res) => {
  res.json([
    {
      id: 1,
      content: "hello1",
    },
    {
      id: 2,
      content: "hello2",
    },
    {
      id: 3,
      content: "hello3",
    },
  ]);
});

app.post("/api/post", (req, res) => {
  res.json([
    {
      id: 1,
      content: "hello1",
    },
  ]);
});

app.delete("/api/post", (req, res) => {
  res.json([
    {
      id: 1,
    },
  ]);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
