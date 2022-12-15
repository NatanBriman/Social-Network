import uuid from 'react-uuid';

export default class User {
  #id;
  #username;
  #password;
  #image;
  #friends;
  #likedPosts;
  #joinedDate;

  constructor(username, password, image, friends = [], likedPosts = []) {
    this.#id = uuid();
    this.#username = username;
    this.#password = password;
    this.#image = image;
    this.#friends = friends;
    this.#likedPosts = likedPosts;
    this.#joinedDate = new Date();
  }

  id() {
    return this.#id;
  }
  username() {
    return this.#username;
  }
  password() {
    return this.#password;
  }
  image() {
    return this.#image;
  }
  friends() {
    return this.#friends;
  }
  likedPosts() {
    return this.#likedPosts;
  }
  joinedDate() {
    return this.#joinedDate;
  }

  addLikedPost(post) {
    this.#likedPosts.push(post);
  }
  removeLikedPost(postToRemove) {
    const updatedLikedPosts = this.#likedPosts.filter(
      (likedPost) => likedPost.id !== postToRemove.id
    );

    this.#likedPosts = updatedLikedPosts;
  }

  addFriend(friend) {
    this.#friends.push(friend);
  }
  removeFriend(friendToRemove) {
    const updatedFriends = this.#friends.filter((friend) => friend.id !== friendToRemove.id);

    this.#friends = updatedFriends;
  }

  getInstanceAsObject() {
    return {
      id: this.id(),
      username: this.username(),
      password: this.password(),
      image: this.image(),
      friends: this.friends(),
      likedPosts: this.likedPosts(),
      joinedDate: this.joinedDate(),
    };
  }
}
