const fs = require('fs');

function countStudents(path) {
  const promise = (resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) reject(Error('Cannot load the database'));
      const messages = [];
      const newData = data.toString().split('\n');
      let students = newData.filter((item) => item);
      students = students.map((item) => item.split(','));
      const stdNum = students.length ? students.length - 1 : 0;
      let message = `Number of students: ${stdNum}`;
      console.log(message);
      messages.push(message);
      const obj = {};
      for (const i in students) {
        if (i !== 0) {
          if (!obj[students[i][3]]) obj[students[i][3]] = [];
          obj[students[i][3]].push(students[i][0]);
        }
      }
      delete obj.subject;
      for (const key of Object.keys(obj)) {
        message = `Number of students in ${key}: ${obj[key].length}. List: ${obj[key].join(', ')}`;
        console.log(message);
        messages.push(message);
      }
      resolve(messages);
    });
  };
  return new Promise(promise);
}
module.exports = countStudents;
