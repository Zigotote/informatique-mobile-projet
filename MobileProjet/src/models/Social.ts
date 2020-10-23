export default class Social {
  private _icon: string;
  private _name: string;
  private _link: string;

  constructor(icon: string, name: string, link: string) {
    this._icon = icon;
    this._name = name;
    this._link = link;
  }

  get icon() {
    return this._icon;
  }

  set icon(value) {
    this._icon = value;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get link() {
    return this._link;
  }

  set link(value) {
    this._link = value;
  }
}
