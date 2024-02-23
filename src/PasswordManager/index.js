import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import './index.css'

const passwordList = []

class PasswordManager extends Component {
  state = {
    passwordList: [],
    websiteInput: '',
    usernameInput: '',
    passwordInput: '',
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

    const newData = {
      id: uuidv4(),
      websiteInput,
      usernameInput,
      passwordInput,
    }

    this.setState(prevState => ({
      passwordList: [...prevState.passwordList, newData],
      websiteInput: '',
      usernameInput: '',
      passwordInput: '',
    }))
  }

  render() {
    const {websiteInput, usernameInput, passwordInput} = this.state
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
            <button className="button" type="button">
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
            <div className="input-container">
              <div className="logo-container-2">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                  className="search-logo"
                />
              </div>
              <input type="search" className="input-2" placeholder="Search" />
            </div>
          </div>
          <hr className="horizontal-line-2" />
          <div className="checkbox-container">
            <input type="checkbox" className="checkbox" />
            <p className="paragraph">Show Password</p>
          </div>
          <div className="password-details-container">
            {passwordList.map(eachPassword => (
              <div className="password-details">
                <div className="profile-logo">P</div>
                <div>
                  <p className="user-details-paragraph">{websiteInput}</p>
                  <p className="user-details-paragraph">{usernameInput}</p>
                  <p className="user-details-paragraph">
                    {passwordInput.length}
                  </p>
                </div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
                  className="delete-image"
                  alt="delete"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManager