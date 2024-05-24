import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

let userPost = [];
let postEditCheck = false;
let editedPost;

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/board", (req, res) => {
  res.render("board.ejs", {
    text: userPost,
    checker: postEditCheck,
    numberCheck: editedPost,
  });
  editedPost = undefined;
  postEditCheck = false;
});

app.post("/board", (req, res) => {
  res.render("board.ejs", {
    text: userPost,
    checker: postEditCheck,
    numberCheck: editedPost,
  });
});

app.post("/post", (req, res) => {
  let userPosttext = req.body.UserPosts;
  userPost.push(userPosttext);
  res.redirect("/board");
});

app.post("/edit", (req, res) => {
  editedPost = req.body.edit;
  postEditCheck = true;
  console.log(postEditCheck);
  res.redirect("/board");
});

app.post("/postedit", (req, res) => {
  let numEditedPost = req.body.EditPosts;
  let markpost = req.body.editpost;
  userPost.splice(markpost, 1, numEditedPost);
  res.redirect("/board");
});

app.post("/delete", (req, res) => {
  let deletedPost = req.body.delete;
  userPost.splice(deletedPost, 1);
  res.redirect("/board");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
