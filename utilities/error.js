// {"links":[{"href":"/api","rel":"api","type":"GET"}]}

app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(500).send("Something broke!");
});
