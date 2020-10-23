export default class Blog {
  private _id: string;
  private _title: string;
  private _posted: string;
  private _primaryColor: string;
  private _secondaryColor: string;
  private _image: string;
  private _brief: string;

  constructor(
    id: string,
    title: string,
    posted: string,
    primaryColor: string,
    secondaryColor: string,
    image: string,
    brief: string
  ) {
    this._id = id;
    this._title = title;
    this._posted = posted;
    this._primaryColor = primaryColor;
    this._secondaryColor = secondaryColor;
    this._image = image;
    this._brief = brief;
  }

  get id() {
    return this._id;
  }

  set id(value) {
    this._date = value;
  }
}
