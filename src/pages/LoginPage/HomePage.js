import React from 'react';
import {Link} from "react-router-dom";

export class HomePage extends React.Component{
  render() {
    console.log(this.props);
    return (
      <div>
        <h3>You're logged in WebSite</h3>
        <h4>Welcome {this.props.user.username}</h4>
        <Link to={'/login'}>Logout</Link>
      </div>
    );
  }
}