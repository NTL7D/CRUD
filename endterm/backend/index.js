const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "user",
});
// CREATE

app.post("/api/post", (req, res) => {
  const { name, email, contact } = req.body;
  const SqlPost = "INSERT INTO contact (name, email, contact) VALUES (?,?,?)";
  db.query(SqlPost, [name, email, contact], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
// READ

app.get("/api/get", (req, res) => {
  const mySQLget = "SELECT * FROM contact ";
  db.query(mySQLget, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/api/get/:id", (req, res) => {
  const { id } = req.params;
  const mySQLget = "SELECT * FROM contact WHERE id = ?";
  db.query(mySQLget, id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
// UPDATE
app.put("/api/update/:id", (req, res) => {
  const { id } = req.params;
  const { name, email, contact } = req.body;
  const mySQLupdate =
    "UPDATE contact SET name= ?, email= ?, contact= ? WHERE id=?";
  db.query(mySQLupdate, [name, email, contact, id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

// DELETE
app.delete("/api/delete/:id", (req, res) => {
  const { id } = req.params;
  const mySQLdelete = "DELETE FROM contact WHERE id = ?";
  db.query(mySQLdelete, id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});


app.listen(PORT, (req, res) => {
  console.log(`Listening at http://localhost:${PORT}. Have fun!`);
});
