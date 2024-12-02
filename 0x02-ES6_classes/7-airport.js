/**
 * Airport class
 * @name: string
 * @code: string
 */
class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  // eslint-disable-next-line class-methods-use-this
  get [Symbol.toStringTag]() {
    return this._code;
  }
}

export default Airport;
