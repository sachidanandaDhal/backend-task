const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('<h2>Server is running </h2><p>Try POSTing to <code>/data</code> with some JSON data.</p>');
});

app.get('/data', (req, res) => {
  res.send('<h3>This is the GET /data endpoint. Please use POST to send JSON data.</h3>');
});

app.post('/data', (req, res) => {
  const jsonData = req.body;

  if (!jsonData || Object.keys(jsonData).length === 0) {
    return res
      .status(400)
      .send('<h3> No data provided. Please send JSON in the request body.</h3>');
  }

  const htmlResponse = `
    <h2> Data received successfully!</h2>
    <pre>${JSON.stringify(jsonData, null, 2)}</pre>
  `;
  res.send(htmlResponse);
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(` Server is running on http://localhost:${PORT}`);
});
