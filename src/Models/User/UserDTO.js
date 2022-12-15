export default class UserDTO {
  #id;
  #username;
  #image;

  constructor(id, username, image) {
    this.#id = id;
    this.#username = username;
    this.#image = image;
  }

  id() {
    return this.#id;
  }
  username() {
    return this.#username;
  }
  image() {
    return this.#image;
  }

  static convertUserToDTO(user) {
    return this(user.id(), user.username(), user.image());
  }

  getInstanceAsObject() {
    return {
      id: this.id(),
      username: this.username(),
      image: this.image(),
    };
  }
}
