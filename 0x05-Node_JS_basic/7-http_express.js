const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => res.send('Hello Holberton School!'));

app.get('/students', async (req, res) => {
  const message = 'This is the list of our students\n';
  try {
    const stdContent = await countStudents(process.argv[2]);
    res.send(`${message}${stdContent.join('\n')}`);
  } catch (error) {
    res.send(`${message}${error.message}`);
  }
});

app.listen(1255);

module.exports = app;
