import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response, path) {
    readDatabase(path)
      .then((data) => {
        const output = [];
        let message;
        output.push('This is the list of our students');

        for (const key of Object.keys(data)) {
          message = `Number of students in ${key}: ${data[key].length}. List: ${data[key].join(', ')}`;
          output.push(message);
        }
        response.status(200).send(`${output.join('\n')}`);
      })
      .catch(() => response.status(500).send('Cannot load the database'));
  }

  static getAllStudentsByMajor(request, response, path) {
    const { major } = request.params;

    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
    } else {
      readDatabase(path)
        .then((data) => {
          response.status(200).send(`List: ${data[major].join(', ')}`);
        })
        .catch(() => response.status(500).send('Cannot load the database'));
    }
  }
}

export default StudentsController;
