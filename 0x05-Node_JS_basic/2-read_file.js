const fs = require('fs');

function countStudents(path) {
  try {
    let data = fs.readFileSync(path, 'utf8');
    data = data.toString().split('\n');
    data = data.filter((item) => item);
    console.log('Number of students:', data.length - 1);
    const obj = {};
    for (let i = 1; i < data.length; i += 1) {
      const newdata = data[i].split(',');
      const dept = newdata[3];
      const fn = newdata[0];
      if (!(dept in obj)) obj[dept] = [];
      obj[dept].push(fn);
    }
    for (const i in obj) {
      if (i) {
        console.log(`Number of students in ${i}: ${obj[i].length}. List: ${obj[i].join(', ')}`);
      }
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
