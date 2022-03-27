export default class UserInfo {
  constructor({
    titleSelector,
    subtitleSelector
  }) {
    this._title = document.querySelector(titleSelector);
    this._subtitle = document.querySelector(subtitleSelector);

  }
  getUserInfo() {
    this.user = {
      name: this._title.textContent,
      job: this._subtitle.textContent
    };
    return this.user;
  }

  setUserInfo(user) {

    this._title.textContent = user.name;
    this._subtitle.textContent = user.job;
  };
}
