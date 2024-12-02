const fs = require('fs');

function countStudents(filePath) {
  let content = '';
  try {
    content = fs.readFileSync(filePath,
      { encoding: 'utf-8' }).split('\n').slice(1);
  } catch (err) {
    throw Error('Cannot load the database');
  }

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

  console.log(`Number of students: ${totalStudents}`);

  for (const subj in studentCounter) {
    if (Object.prototype.hasOwnProperty.call(studentCounter, subj)) {
      console.log(`Number of students in ${subj}: ${studentCounter[subj].length}. List: ${studentCounter[subj].join(', ')}`);
    }
  }
}

module.exports = countStudents;
