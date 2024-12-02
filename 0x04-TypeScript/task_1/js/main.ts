interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: boolean;
  location: string;
  [key: string]: any;
}

interface IStudentConstructor {
  firstName: string;
  lastName: string;
}

interface IStudent {
  workOnHomework(): string;
  displayName(): string;
}

interface IPrintTeacherFunc {
  (firstName: string, lastName: string): string;
}

const printTeacher: IPrintTeacherFunc = (firstName, lastName) => {
  return `${firstName.charAt(0)}`;
};

class StudentClass implements IStudent {
    private _firstName: string;
    private _lastName: string;

  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName
  }

  workOnHomework() {
    return "Currently working";
  }

  displayName(): string {
    return this._firstName;
  }
}
