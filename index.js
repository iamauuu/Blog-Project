import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

let userPost = [];

app.get("/", (req,res) => {
    res.render("index.ejs");
});

app.get("/start", (req,res) => {
    res.render("board.ejs", {text: userPost});
});

app.post("/start", (req,res) => {
    res.render("board.ejs", {text: userPost});
});

app.post("/post", (req,res) => {
    let userPosttext = req.body.UserPosts;
    userPost.push(userPosttext);
    console.log(userPost);
    res.render("board.ejs", {text: userPost});
});

app.post("/edit", (req,res) => {
    res.render("board.ejs", {text: userPost});
});

app.post("/delete", (req,res) => {
    res.render("board.ejs", {text: userPost});
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});