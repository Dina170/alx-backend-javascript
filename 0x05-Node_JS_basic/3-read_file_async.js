const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, content) => {
      if (error) {
        reject(Error('Cannot load the database'));
        return;
      }

      const messages = [];
      const data = content.toString().split('\n');
      let students = data.filter((item) => item);
      students = students.map((item) => item.split(','));

      const stdNum = students.length ? students.length - 1 : 0;
      let message = `Number of students: ${stdNum}`;
      console.log(message);
      messages.push(message);

      const fields = {};
      for (const i in students) {
        if (i) {
          if (!fields[students[i][3]]) fields[students[i][3]] = [];
          fields[students[i][3]].push(students[i][0]);
        }
      }

      delete fields.field;

      for (const key of Object.keys(fields)) {
        message = `Number of students in ${key}: ${fields[key].length}. List: ${fields[key].join(', ')}`;
        console.log(message);
        messages.push(message);
      }
      resolve(messages);
    });
  });
}
module.exports = countStudents;
