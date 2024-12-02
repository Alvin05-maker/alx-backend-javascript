///

export const cpp = new Subjects.Cpp()
export const java = new Subjects.Java()
export const react = new Subjects.React()

export const cTeacher : Subjects.ITeacher = {
    firstName: "Gullima",
    lastName: 'Salva',
    experienceTeachingC: 20
}

console.log('C++')
cpp.setTeacher = cTeacher;
cpp.getRequirements()
cpp.getAvailableTeacher()

console.log('java')
java.setTeacher = cTeacher;
java.getRequirements()
java.getAvailableTeacher()

console.log('React')
react.setTeacher = cTeacher;
console.log(react.getRequirements())
console.log(react.getAvailableTeacher())