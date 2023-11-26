const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from Git!');
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
