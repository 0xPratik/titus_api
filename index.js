const express = require("express");
const mysql = require("mysql");
const app = express();

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "pratikS@1405",
  database: "polkamusic",
});

connection.connect((err) => {
  console.log(err);
  if (err) throw err;
  console.log("Connected!");
});

app.use(express.json());
app.use(express.urlencoded());

app.post("/users", (req, res) => {
  connection.query(
    "INSERT INTO user(song_name, artist_name, song_track, song_album, song_url) VALUES (?,?,?,?,?)",
    [
      req.body.song_name,
      req.body.artist_name,
      req.body.song_track,
      req.body.song_album,
      req.body.song_url,
    ],
    (err, result) => {
      if (err) {
        throw err;
      }
      console.log(result.affectedRows);
      res.send(result.affectedRows);
    }
  );
});

app.get("/users", (req, res) => {
  connection.query("SELECT * FROM user", (err, resp) => {
    if (err) {
      console.log(err);
    }
    res.send(resp);
  });
});

app.get("/users/:song_name", (req, res) => {
  connection.query(
    "SELECT * FROM user WHERE song_name = ",
    req.params.song_name,
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.send(result);
    }
  );
});

app.get("/artists", (req, res) => {
  connection.query(`SELECT artist_name FROM user`, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

app.get("/albums", (req, res) => {
  connection.query(`SELECT song_album FROM user`, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

app.delete("/users/:song_name", (req, res) => {
  connection.query(
    "DELETE FROM user WHERE song_name = ?",
    req.params.song_name,
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.send(result);
    }
  );
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Running on PORT ${PORT} `);
});
