import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import './index.css'

const colorList = ['yellow', 'green', 'orange', 'brown', 'blue']

class PasswordManager extends Component {
  state = {
    passwordList: [],
    websiteInput: '',
    usernameInput: '',
    passwordInput: '',
    isChecked: false,
    searchInput: '',
    isTrue: false,
  }

  onChangeWebsite = event => {
    this.setState({
      websiteInput: event.target.value,
    })
  }

  onChangeUsername = event => {
    this.setState({
      usernameInput: event.target.value,
    })
  }

  onChangePassword = event => {
    this.setState({
      passwordInput: event.target.value,
    })
  }

  onSubmitPasswordData = event => {
    event.preventDefault()
    const {websiteInput, usernameInput, passwordInput} = this.state
    const initial = websiteInput.slice(0, 1).toUpperCase()
    const classValue = colorList[Math.floor(Math.random() * 5)]

    const newData = {
      id: uuidv4(),
      initial,
      websiteInput,
      usernameInput,
      passwordInput,
      classValue,
    }

    this.setState(prevState => ({
      passwordList: [...prevState.passwordList, newData],
      websiteInput: '',
      usernameInput: '',
      passwordInput: '',
      searchInput: '',
      isTrue: true,
    }))
  }

  onClickDeleteImage = id => {
    const {passwordList} = this.state
    const filteredList = passwordList.filter(eachItem => eachItem.id !== id)
    const caseOf = filteredList.length !== 0
    this.setState({
      passwordList: filteredList,
      isTrue: caseOf,
    })
  }

  onClickCheckbox = () => {
    this.setState(prevState => ({
      isChecked: !prevState.isChecked,
    }))
  }

  searchList = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {
      websiteInput,
      usernameInput,
      passwordInput,
      passwordList,
      isChecked,
      searchInput,
    } = this.state
    let {isTrue} = this.state
    const newList = passwordList.filter(eachValue =>
      eachValue.websiteInput.toLowerCase().includes(searchInput.toLowerCase()),
    )
    if (newList.length === 0) {
      isTrue = false
    } else {
      isTrue = true
    }
    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="app-logo"
        />
        <div className="card-container">
          <form className="form-container" onSubmit={this.onSubmitPasswordData}>
            <h1 className="heading">Add New Password</h1>
            <div className="flex-container">
              <div className="logo-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="website-logo"
                />
              </div>
              <input
                type="text"
                className="input"
                placeholder="Enter Website"
                onChange={this.onChangeWebsite}
                value={websiteInput}
              />
            </div>
            <div className="flex-container">
              <div className="logo-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                  className="website-logo"
                />
              </div>
              <input
                type="text"
                className="input"
                placeholder="Enter Username"
                onChange={this.onChangeUsername}
                value={usernameInput}
              />
            </div>
            <div className="flex-container">
              <div className="logo-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                  className="website-logo"
                />
              </div>
              <input
                type="password"
                className="input"
                placeholder="Enter Password"
                onChange={this.onChangePassword}
                value={passwordInput}
              />
            </div>
            <button className="button" type="submit">
              Add
            </button>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
            className="image"
          />
        </div>
        <div className="bottom-container">
          <div className="flex-container-2">
            <h1 className="heading-2">Your Passwords</h1>
            <p className="count-password">{newList.length}</p>
            <div className="input-container">
              <div className="logo-container-2">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                  className="search-logo"
                />
              </div>
              <input
                type="search"
                className="input-2"
                placeholder="Search"
                onChange={this.searchList}
              />
            </div>
          </div>
          <hr className="horizontal-line-2" />
          <div className="checkbox-container">
            <input
              type="checkbox"
              className="checkbox"
              onClick={this.onClickCheckbox}
            />
            <p className="paragraph">Show Password</p>
          </div>
          {!isTrue && (
            <div className="empty-state">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                className="empty-image"
                alt="no password"
              />
              <p className="no-password">No Password</p>
            </div>
          )}
          {isTrue && (
            <div className="password-details-container">
              {newList.map(eachPassword => (
                <div className="password-details">
                  <div className={`profile-logo ${eachPassword.classValue}`}>
                    {eachPassword.initial}
                  </div>
                  <div>
                    <p className="user-details-paragraph">
                      {eachPassword.websiteInput}
                    </p>
                    <p className="user-details-paragraph">
                      {eachPassword.usernameInput}
                    </p>
                    <p className="user-details-paragraph">
                      {isChecked ? (
                        `${eachPassword.passwordInput}`
                      ) : (
                        <img
                          src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
                          alt="stars"
                          className="stars-image"
                        />
                      )}
                    </p>
                  </div>
                  <button
                    type="button"
                    className="delete-button"
                    onClick={() => this.onClickDeleteImage(eachPassword.id)}
                  >
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
                      className="delete-image"
                      alt="delete"
                    />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default PasswordManager
