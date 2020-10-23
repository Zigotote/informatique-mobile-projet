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
    this._id = value;
  }

  get title() {
    return this._title;
  }

  set title(value) {
    this._title = value;
  }

  get posted() {
    return this._posted;
  }

  set posted(value) {
    this._posted = value;
  }

  get primaryColor() {
    return this._primaryColor;
  }

  set primaryColor(value) {
    this._primaryColor = value;
  }

  get secondaryColor() {
    return this._secondaryColor;
  }

  set secondaryColor(value) {
    this._secondaryColor = value;
  }

  get image() {
    return this._image;
  }

  set image(value) {
    this._image = value;
  }

  get brief() {
    return this._brief;
  }

  set brief(value) {
    this._brief = value;
  }
}
