import Building from './5-building';

/**
 * class SkyHighBuilding {extends Building}
 * @sqft: Number
 * @floors: Number
 */
class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  get floors() { return this._floors; }

  set floors(value) { this._floors = value; }

  // eslint-disable-next-line class-methods-use-this
  evacuationWarningMessage() { return `Evacuate slowly the ${this.floors} floors`; }
}

export default SkyHighBuilding;
