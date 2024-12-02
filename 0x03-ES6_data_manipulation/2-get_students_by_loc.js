/**
 * getStudentsByLocation - returns an array of objects who are located in a specific city
 * @arr: array of objects
 * @city: location
 */
export default function getStudentsByLocation(arr, city) {
  return arr.filter((item) => item.location === city);
}
