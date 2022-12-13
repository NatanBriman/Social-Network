import uuid from 'react-uuid';

export default class User {
  constructor(username, password, image) {
    this.#id = uuid();
    this.#username = username;
    this.#password = password;
    this.#image = image;
    this.#friends = [];
    this.#likedPosts = [];
    this.#joinedDate = new Date();
  }

  get id() {
    return this.#id;
  }
  get username() {
    return this.#username;
  }
  get password() {
    return this.#password;
  }
  get image() {
    return this.#image;
  }
  get friends() {
    return this.#friends;
  }
  get likedPosts() {
    return this.#likedPosts;
  }
  get joinedDate() {
    return this.#joinedDate;
  }

  addLikedPost(post) {
    this.#likedPosts.push(post);
  }
  addFriend(friend) {
    this.#friends.push(friend);
  }
}
