/**
 * getStudentIdsSum - returns the sum of all the student ids
 * @arr: array of objects
 */
export default function getStudentIdsSum(arr) {
  return arr.reduce((accumulator, currentValue) => accumulator + currentValue.id, 0);
}
