namespace Subjects {
    export class Subject {
        teacher: Subjects.ITeacher

        set setTeacher(teacher: ITeacher) {
            this.teacher = teacher;
        }
    }
}