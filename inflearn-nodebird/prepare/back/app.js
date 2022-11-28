const express = require("express");
const app = express();
const PORT = 3065;

const postRouter = require("./routes/posts");

app.get("/", (req, res) => {
  res.send("Hello Node");
});

app.get("/", (req, res) => {
  res.send("Hello Api");
});

app.get("/posts", (req, res) => {
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

app.use('/post',postRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
