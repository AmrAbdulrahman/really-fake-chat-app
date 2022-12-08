const path = require('path');
const express = require('express');

const app = express();
const port = Number(process.env.PORT) || 3000;

// serve statics
app.use(express.static(path.join(__dirname, '../build')));

app.get('*', (_, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Up and running on http://localhost:${port}`);
});
