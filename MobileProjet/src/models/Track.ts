export default class Track {
  private _title: string;

  constructor(title: string) {
    this._title = title;
  }

  get title() {
    return this._title;
  }

  set title(value) {
    this._title = value;
  }
}
