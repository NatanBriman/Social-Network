export default class UserDTO {
  #username;
  #image;

  constructor(username, image) {
    this.#username = username;
    this.#image = image;
  }

  username() {
    return this.#username;
  }
  image() {
    return this.#image;
  }

  static convertUserToDTO(user) {
    return this(user.username, user.image);
  }
}
