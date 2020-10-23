import Track from "./Track";

export default class Schedule {
  private _date: string;
  private _dateReadable: string;
  private _tracks: Array<Track>;

  constructor(date: string, dateReadable: string, tracks: Array<Track>) {
    this._date = date;
    this._dateReadable = dateReadable;
    this._tracks = tracks;
  }

  get date() {
    return this._date;
  }

  set date(value) {
    this._date = value;
  }

  get dateReadable() {
    return this._dateReadable;
  }

  set dateReadable(value) {
    this._dateReadable = value;
  }

  get tracks() {
    return this._tracks;
  }

  set tracks(value) {
    this._tracks = value;
  }
}
