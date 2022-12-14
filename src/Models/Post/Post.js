import uuid from 'react-uuid';

export default class Post {
  #id;
  #author;
  #date;
  #image;
  #description;

  constructor(author, date, image, description) {
    this.#id = uuid();
    this.#author = author;
    this.#date = date;
    this.#image = image;
    this.#description = description;
  }

  id() {
    return this.#id;
  }
  author() {
    return this.#author;
  }
  date() {
    return this.#date;
  }
  image() {
    return this.#image;
  }
  description() {
    return this.#description;
  }
}
