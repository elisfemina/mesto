export default class UserInfo {
    constructor({ userNameSelector, userInfoSelector }) {
        this._userName = document.querySelector(userNameSelector);
        this._userInfo = document.querySelector(userInfoSelector);        
    }

    getUserInfo() {
        const userInfo = {
            name: this._userName.textContent,
            job: this._userInfo.textContent
        }

        return userInfo
    }

    setUserInfo(userData) {
        this._userName.textContent = userData.name;
        this._userInfo.textContent = userData.job;
    }
}