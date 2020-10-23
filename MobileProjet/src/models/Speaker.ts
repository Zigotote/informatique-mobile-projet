import Badge from "./Badge";
import Social from "./Social";

export default class Speaker {
  private _id: number;
  private _name: string;
  private _featured: boolean;
  private _company: string;
  private _companyLogo: string;
  private _country: string;
  private _photoUrl: string;
  private _shortBio: string;
  private _tags: Array<string>;
  private _badges: Array<Badge>;
  private _socials: Array<Social>;

  constructor(
    id: number,
    name: string,
    featured: boolean,
    company: string,
    companyLogo: string,
    country: string,
    shortBio: string,
    photoUrl: string,
    tags: Array<string>,
    badges: Array<Badge>,
    socials: Array<Social>
  ) {
    this._id = id;
    this._name = name;
    this._featured = featured;
    this._company = company;
    this._companyLogo = companyLogo;
    this._country = country;
    this._shortBio = shortBio;
    this._photoUrl = photoUrl;
    this._tags = tags;
    this._badges = badges;
    this._socials = socials;
  }

  get id() {
    return this._id;
  }

  set id(value) {
    this._id = value;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get featured() {
    return this._featured;
  }

  set featured(value) {
    this._featured = value;
  }

  get company() {
    return this._company;
  }

  set company(value) {
    this._company = value;
  }

  get companyLogo() {
    return this._companyLogo;
  }

  set companyLogo(value) {
    this._companyLogo = value;
  }

  get country() {
    return this._country;
  }

  set country(value) {
    this._country = value;
  }

  get shortBio() {
    return this._shortBio;
  }

  set shortBio(value) {
    this._shortBio = value;
  }

  get photoUrl() {
    return this._photoUrl;
  }

  set photoUrl(value) {
    this._photoUrl = value;
  }

  get tags() {
    return this._tags;
  }

  set tags(value) {
    this._tags = value;
  }

  get badges() {
    return this._badges;
  }

  set badges(value) {
    this._badges = value;
  }

  get socials() {
    return this._socials;
  }

  set socials(value) {
    this._socials = value;
  }
}
