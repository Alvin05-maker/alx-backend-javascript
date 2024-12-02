namespace Subjects {
    export interface ITeacher {
        experienceTeachingReact?: number;
    }

    export class React extends Subjects.Subject {
        getRequirements() { return 'Here is the list of requirements for React'}

        getAvailableTeacher() { 
            if (this.teacher.experienceTeachingReact) {
                return `Available Teacher: ${ this.teacher.firstName }`
            }

            return ('No available teacher')
         }
    }
}

