import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

// static files
app.use(express.static("public"));

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

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

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
})