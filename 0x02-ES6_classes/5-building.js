// Building class

/**
 * @sqft: number
 */
class Building {
  constructor(sqft) {
    this._sqft = sqft;

    if (new.target.name !== Building.name) {
      this.evacuationWarningMessage();
    }
  }

  get sqft() { return this._sqft; }

  set sqft(value) { this._sqft = value; }

  // eslint-disable-next-line class-methods-use-this
  evacuationWarningMessage() { throw Error('Class extending Building must override evacuationWarningMessage'); }
}

export default Building;
