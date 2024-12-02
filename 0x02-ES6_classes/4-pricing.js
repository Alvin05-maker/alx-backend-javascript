import Currency from './3-currency';

/**
 * @amount: Number;
 * @currency: Currency
 */

class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() { return this._amount; }

  set amoount(value) { this._amount = value; }

  get currency() { return this._currency; }

  set currency(value) { this._currency = new Currency(value.code, value.name); }

  displayFullPrice() { return `${this.amount} ${this.currency.displayFullCurrency()}`; }

  static convertPrice(amount, conversionRate) { return amount * conversionRate; }
}

export default Pricing;
