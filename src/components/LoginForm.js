import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleOnChange = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    if (this.state.username && this.state.password) {
      this.props.handleLogin(this.state)
    }
  }

  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
        <div>
          <label>
            Username
            <input value={this.state.username} id="username" name="username" type="text" onChange={this.handleOnChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input value={this.state.password} id="password" name="password" type="password" onChange={this.handleOnChange} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
