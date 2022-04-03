export default class UserInfo {
  constructor({
    titleSelector,
    subtitleSelector,
    avatarSelector
  }) {
    this._title = document.querySelector(titleSelector);
    this._subtitle = document.querySelector(subtitleSelector);
    //
    this.__avatar = document.querySelector(avatarSelector)

  }
  getUserInfo() {
    this.user = {
      name: this._title.textContent,
      about: this._subtitle.textContent,
      //
      avatar: this.__avatar.src
    };
    return this.user;
  }
//
  setUserAvatar(user) {
    this.__avatar.src = user.avatar;
  }

  setUserInfo(user) {
    this._title.textContent = user.name;
    this._subtitle.textContent = user.about;
  };
}
