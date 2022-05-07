export default class Product {
  private readonly _id: number;

  private readonly _name: string;

  private readonly _description: string;

  private readonly _price: number;

  private _createAt: Date;

  constructor(
    id: number,
    name: string,
    description: string,
    price: number,
    createAt: Date,
  ) {
    this._id = id;
    this._name = name;
    this._description = description;
    this._price = price;
    this._createAt = createAt;
  }

  get id(): number {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get description(): string {
    return this._description;
  }

  get price(): number {
    return this._price;
  }

  get createAt(): Date {
    return this._createAt;
  }
}
