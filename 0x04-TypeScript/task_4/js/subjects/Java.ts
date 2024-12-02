namespace Subjects {
    export interface ITeacher {
        experienceTeachingJava?: number;
    }

    export class Java extends Subjects.Subject {
        getRequirements() { return 'Here is the list of requirements for Java'}

        getAvailableTeacher() { 
            if (this.teacher.experienceTeachingJava) {
                return `Available Teacher: ${ this.teacher.firstName }`
            }

            return ('No available teacher')
         }
    }
}

