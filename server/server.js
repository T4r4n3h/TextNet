require("dotenv").config({ path: "../.env" });
const express = require("express");
const db = require("./db/index");
const morgan = require("morgan");
const cors = require("cors");
const app = express();

//middleware
app.use(cors());
app.use(express.json());

// SNIPPETS
// get all the snippets:
app.get("/api/snippets", async (req, res) => {
  try {
    const allSnippets = await db.query("SELECT * FROM snippets");
    console.log("this is RESULT", allSnippets);
    res.status(200).json(allSnippets.rows);
  } catch (error) {
    console.error(err.message);
  }
});

//CREATE
//
//add One to the list
app.post("/api/snippets", async (req, res) => {
  console.log("a post request just came through! ******");
  console.log(req.body);
  try {
    const results = await db.query(
      "INSERT INTO snippets (title, body) values ($1, $2) RETURNING *",
      [req.body.title, req.body.body]
    );
    res.send("a post just came through! ******");
    res.status(200).json({
      status: "success",
      data: {
        snippet: results.rows[0],
      },
    });
  } catch (err) {
    console.log(err.message);
  }
});
// GET One snippet ( Detail page)
app.get("/api/snippets/:id", async (req, res) => {
  console.log(
    `this is the id of the specific snippet you chose: ${req.params.id}`
  );
  try {
    const result = await db.query("SELECT * FROM snippets WHERE id = $1", [
      req.params.id,
    ]);
    res.status(200).json({
      status: "success",
      data: {
        snippet: result.rows[0],
      },
    });
  } catch (error) {
    console.log(error.message);
  }
});
//DELETE a Snippet ( for a button that we are going to implement later on the front)
app.delete("/api/snippets/:id", async (req, res) => {
  console.log("are you sure?");
  console.log(
    `this is the id of the snippet you are looking to delete ${req.params.id}`
  );

  try {
    const results = await db.query("DELETE FROM snippets WHERE id = $1", [
      req.params.id,
    ]);
    res.status(204);
  } catch (error) {
    console.log(error.message);
  }
});

app.post("/api/words", async (req, res) => {
  console.log("posting words now!");
  res.send("THANK YOU FOR SHOWINGUP");

  console.log("this is req.body", req.body);
  try {
    const wordResults = await db.query(
      "INSERT INTO words(id, word, lables_id) values ($1, $2, $3) RETURNING *",
      [req.body.id, req.body.word, req.body.lables_id]
    );

    console.log("this is worldResults", wordResults);
    res.status(200).json({
      status: "success",
      data: {
        wordResults,
      },
    });
  } catch (err) {
    console.log(err.message);
  }
});

//Server Setup for port 3001

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Hey there! the Server is up and running on port ${port}`);
});
