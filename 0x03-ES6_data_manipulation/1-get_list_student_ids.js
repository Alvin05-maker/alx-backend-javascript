/**
 *  returns an array of ids from a list of object.
 * @arr: array of objects
 */
export default function getListStudentIds(arr) {
  if (!(arr instanceof Array)) {
    return [];
  }

  return arr.map((item) => item.id);
}
