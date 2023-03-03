export default class UserInfo {
  constructor(userSelector, jobSelector) {
    this._userSelector = document.querySelector(userSelector);
    this._jobSelector = document.querySelector(jobSelector);
    this._userInput = document.querySelector('.popup__input_value_name');
    this._jobInput = document.querySelector('.popup__input_value_job');
  }

  getUserInfo() {
    this._userInfo = {
      name: this._userInput.value,
      job: this._jobInput.value
    }

    return this._userInfo;
  }

  setUserInfo() {
    this._userSelector.textContent = this._userInfo.name;
    this._jobSelector.textContent = this._userInfo.job;
  }
}
