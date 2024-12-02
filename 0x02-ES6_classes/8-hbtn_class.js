/**
 * class HolbertonClass
 * @size: number;
 * @location: string
 */
class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this._size;
    } if (hint === 'string') {
      return this._location;
    }
    return 'Nothing';
  }
}

export default HolbertonClass;
