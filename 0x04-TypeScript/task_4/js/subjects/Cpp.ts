namespace Subjects {
  export interface ITeacher {
    experienceTeachingC?: number;
  }

  export class Cpp extends Subjects.Subject {
    getRequirements() {
      return "Here is the list of requirements for Cpp";
    }

    getAvailableTeacher() {
        if (this.teacher.experienceTeachingC) {
            return `Available Teacher: ${this.teacher.firstName}`
        }

        return 'No available teacher'
    }
  }
}
