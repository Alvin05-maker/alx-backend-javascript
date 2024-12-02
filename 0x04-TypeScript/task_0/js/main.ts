interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

let student1: Student = {
  firstName: "obibma",
  lastName: "smart",
  age: 24,
  location: "lagos",
};

let student2: Student =  {
    firstName: "Okereke",
    lastName: "Uzochukwu",
    age: 24,
    location: "Benin",
  };

const studentsList: Array<Student> = [student1, student2];

const renderHtml = (studentList: Array<Student>) => {

  const table = document.createElement('table');
  const headRow = document.createElement('tr');
  table.insertAdjacentElement('beforeend', headRow);

  // insert headers
  headRow.insertAdjacentHTML('beforeend', '<th>FirstName</th>');
  headRow.insertAdjacentHTML('beforeend', '<th>Location</th>');

  for (const student of studentsList) {
    const studentRow = document.createElement('tr')
    studentRow.insertAdjacentHTML('beforeend', `<td>${student.firstName}</td>`);
    studentRow.insertAdjacentHTML('beforeend', `<td>${student.location}</td>`);
    table.insertAdjacentElement('beforeend', studentRow);
  }
  document.body.insertAdjacentElement('beforeend', table);
}

renderHtml(studentsList)