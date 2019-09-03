import React from 'react';
import {AuthService} from "../../services/auth.service";
import {Redirect} from "react-router-dom";

export class LoginPage extends React.Component{
  constructor(props){
    super(props);
    AuthService.logout();
    this.state = {
      username: '',
      password: '',
      login: false,
    }
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    if (!(username && password)) return;
    AuthService.login(username, password)
      .then(
        user => {
          this.setState({login: true})
        }
      )
      .catch((error) => console.error(error));
  };
  render() {
    if(this.state.login) return <Redirect to={'/'} />;
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name={'username'} onChange={this.handleChange} />
        <input type="password" name={'password'} onChange={this.handleChange} />
        <button type="submit">Login</button>
      </form>
    );
  }
}