/**
 * updateUniqueItems - returns an updated map for all items with initial quantity at 1
 *
 * @map: Map()
*/
export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  return [...map.keys()]
    .map((key) => (map.get(key) === 1 ? map.set(key, 100) : null));
}
