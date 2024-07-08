import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

// Set EJS as the view engine
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");


// middleware
app.use(express.urlencoded({ extended: true }));

// static files
app.use(express.static("public"));


// routes
app.get("/", (req, res) => {
    res.render("index.ejs");
})

app.get("/expertise", (req, res) => {
    res.render("expertise.ejs");
})

app.get("/projects", (req, res) => {
    res.render("projects.ejs");
})

app.get("/experiences", (req, res) => {
    res.render("experiences.ejs");
})

app.get("/contact", (req, res) => {
    res.render("contact.ejs");
})

app.post("/submit", (req, res) => {
    console.log("yay");
})

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
})