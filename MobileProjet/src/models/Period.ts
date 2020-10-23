export class Period {
  private _start: string;
  private _end: string;

  constructor(start: string, end: string) {
    this._start = start;
    this._end = end;
  }

  get start() {
    return this._start;
  }

  set start(value) {
    this._start = value;
  }

  get end() {
    return this._end;
  }

  set end(value) {
    this._end = value;
  }
}
