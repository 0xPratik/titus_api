const connection = require("../db");
const controller = require("../db");

exports.getReports = (req, res) => {
  connection.query("SELECT * FROM reports", (err, result) => {
    if (err) {
      throw err;
    }
    res.status(200).send(result);
  });
};

exports.getAReport = (req, res) => {
  connnection.query(
    "SELECT * FROM reports WHERE song_src = ?",
    req.params.src,
    (err, result) => {
      if (err) {
        throw err;
      }
      res.status(200).send(result);
    }
  );
};

exports.deleteAReport = (req, res) => {
  connection.query(
    "DELETE FROM reports WHERE song_src",
    req.params.src,
    (err, result) => {
      if (err) {
        throw err;
      }
      res.status(200).send(result);
    }
  );
};

exports.updateDuration = (req, res) => {
  connection.query(
    "UPDATE reports SET duration = ? WHERE song_src = ? ",
    [req.body.duration, req.body.song_src],
    (err, result) => {
      if (err) {
        throw err;
      }
      res.status(200).send(result);
    }
  );
};
