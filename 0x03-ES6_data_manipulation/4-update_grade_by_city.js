/**
 * updateStudentGradeByCity - returns an array of students for a specific city
 * with their new grade
 *
 * @arr: list of students object
 * @city: string
 * @newGrades: array of object { studentId: 78, grade: 50 }
 */
export default function updateStudentGradeByCity(arr, city, newGrades) {
  return arr
    .filter((student) => student.location === city)
    .map((student) => {
      const studentGrade = newGrades.filter((grade) => grade.studentId === student.id);

      if (studentGrade.length) {
        return { ...student, grade: studentGrade[0].grade };
      }

      return { ...student, grade: 'N/A' };
    });
}
