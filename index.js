import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

let userPost = [];
let postEditCheck = false;

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/start", (req, res) => {
  res.render("board.ejs", { text: userPost, checker: postEditCheck });
});

app.post("/start", (req, res) => {
  res.render("board.ejs", { text: userPost, checker: postEditCheck });
});

app.post("/post", (req, res) => {
  let userPosttext = req.body.UserPosts;
  userPost.push(userPosttext);
  console.log(userPost);
  res.render("board.ejs", { text: userPost, checker: postEditCheck });
});

app.post("/edit", (req, res) => {
  let editedPost = req.body.edit;
  console.log(editedPost);
  let postEditCheck = true;
  console.log(userPost);
  res.render("board.ejs", {
    text: userPost,
    checker: postEditCheck,
    numberCheck: editedPost,
  });
});

app.post("/postedit", (req, res) => {
  let editedPost = req.body.EditPosts;
  let markpost = req.body.editpost;
  console.log(editedPost);
  console.log(markpost);
  userPost.splice(markpost, 1, editedPost);
  console.log(userPost);
  res.render("board.ejs", { text: userPost, checker: postEditCheck });
});

app.post("/delete", (req, res) => {
  let deletedPost = req.body.delete;
  console.log(deletedPost);
  userPost.splice(deletedPost, 1);
  console.log(userPost);
  res.render("board.ejs", { text: userPost, checker: postEditCheck });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
