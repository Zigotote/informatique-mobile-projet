import Track from "./Track";

export default class Session {
  private _id: number;
  private _title: string;
  private _titleMobile: string;
  private _description: string;
  private _image: string;
  private _tracks: Array<Track>;
  private _category: string;
  private _language: string;
  private _tags: Array<string>;
  private _complexity: string;
  private _speakers: Array<number>;

  constructor(
    id: number,
    title: string,
    titleMobile: string,
    description: string,
    image: string,
    tracks: Array<Track>,
    category: string,
    language: string,
    tags: Array<string>,
    complexity: string,
    speakers: Array<number>
  ) {
    this._id = id;
    this._title = title;
    this._titleMobile = titleMobile;
    this._description = description;
    this._image = image;
    this._tracks = tracks;
    this._category = category;
    this._tags = tags;
    this._language = language;
    this._complexity = complexity;
    this._speakers = speakers;
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

  get titleMobile() {
    return this._titleMobile;
  }

  set titleMobile(value) {
    this._titleMobile = value;
  }

  get description() {
    return this._description;
  }

  set description(value) {
    this._description = value;
  }

  get image() {
    return this._image;
  }

  set image(value) {
    this._image = value;
  }

  get tracks() {
    return this._tracks;
  }

  set tracks(value) {
    this._tracks = value;
  }

  get category() {
    return this._category;
  }

  set category(value) {
    this._category = value;
  }

  get language() {
    return this._language;
  }

  set language(value) {
    this._language = value;
  }

  get tags() {
    return this._tags;
  }

  set tags(value) {
    this._tags = value;
  }

  get complexity() {
    return this._complexity;
  }

  set complexity(value) {
    this._complexity = value;
  }

  get speakers() {
    return this._speakers;
  }

  set speakers(value) {
    this._speakers = value;
  }
}
