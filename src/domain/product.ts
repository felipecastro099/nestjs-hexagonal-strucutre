export default class Product {
  private readonly _id: number;

  private readonly _name: string;

  private readonly _description: string;

  private readonly _price: number;

  private readonly _createdAt: Date;

  constructor(
    id: number,
    name: string,
    description: string,
    price: number,
    createdAt: Date,
  ) {
    this._id = id;
    this._name = name;
    this._description = description;
    this._price = price;
    this._createdAt = createdAt;
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

  get createdAt(): Date {
    return this._createdAt;
  }
}
