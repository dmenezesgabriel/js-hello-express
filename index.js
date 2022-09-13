const express = require("express");
const app = express();
const PORT = 8080;

// Json middleware
app.use(express.json());

app.get("/hello", (req, res) => {
  res.status(200).send({
    message: "Hello, world!",
  });
});

app.post("/hello/:id", (req, res) => {
  const { id } = req.params;
  const { from } = req.body;

  if (!from) {
    res.status(418).send({ message: "We need 'from' information" });
  }

  res.send({
    from: `Received hello from ${from} & ID of ${id}`,
  });
});

app.listen(PORT, () => console.log(`it's alive on http://localhost:${PORT}`));
