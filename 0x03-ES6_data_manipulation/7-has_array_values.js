/**
 * hasValuesFromArray - returns a boolean if all the elements
 * in the array exist within the set
 *
 * @set: Set
 * @array: Array
 */
export default function hasValuesFromArray(set, array) {
  return array.every((item) => set.has(item));
}
