const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

app.get("/health", (req, res) => {
  res.json({ status: "ok", service: "claims-service" });
});

app.get("/claims", (req, res) => {
  res.json([
    { id: 1, status: "open", amount: 120.5 },
    { id: 2, status: "closed", amount: 250.0 }
  ]);
});

app.listen(port, () => {
  console.log(`Claims service running on port ${port}`);
});
