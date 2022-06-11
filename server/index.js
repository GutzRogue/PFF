const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const mysql = require("mysql2");
const cors = require("cors");
app.use(cors());
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "PFF",
});
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("Hi");
});
app.get("/api/select/:x", (req, res) => {
  const recherche = "select * from users where cin = ? ";
  db.query(recherche, [req.params.x], (err, result) => {
    console.log(err);
    res.send(result);
  });
});
app.post("/api/insert", (req, res) => {
  const cin = req.body.cin;
  const nom = req.body.nom;
  const prenom = req.body.prenom;
  const pass = req.body.pass;
  const sqlInsert = "Insert INTO users Values (?,?,?,?)";
  db.query(sqlInsert, [cin, nom, prenom, pass], (err, result) => {
    console.log(err);
  });
});

app.listen(1500, () => {
  console.log("Port : 1500");
});
