const fs = require('fs');

function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, { encoding: 'utf-8' }, (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      if (!data) {
        return;
      }

      const content = data.split('\n').slice(1);

      const studentCounter = {};
      content.forEach((line) => {
        if (line === '') {
          return;
        }

        const [student, , , subject] = line.split(',');
        if (!(subject in studentCounter)) {
          studentCounter[subject] = [student];
        } else {
          studentCounter[subject].push(student);
        }
      });

      const totalStudents = Object.values(studentCounter).reduce((a, b) => a.length + b.length);

      let output = `Number of students: ${totalStudents}`;

      for (const subj in studentCounter) {
        if (Object.prototype.hasOwnProperty.call(studentCounter, subj)) {
          output += `\nNumber of students in ${subj}: ${studentCounter[subj].length}. List: ${studentCounter[subj].join(', ')}`;
        }
      }
      resolve(console.log(output));
    });
  });
}

module.exports = countStudents;
