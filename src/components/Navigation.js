import React, { Component } from 'react';
import glamorous from 'glamorous';
import {NavLink} from 'react-router-dom';
const Nav = glamorous(NavLink)({
    fontWeight:"bold",
    paddingTop:20,
    display: "inline-block",
    color: "white",
    marginRight: 20,
    marginBottom: 20,
    [".active"]: {
        color: "yellow",
        fontSize: "1.2em",
    },
    ":hover":{
        color: 'white',
         textDecoration: 'none'
    }
});
class Navigation extends Component {
    render() {
        return (
        <glamorous.Div maxWidth="2500" marginLeft="550"  fontSize={24}>
        <Nav exact to="/">
          Home
        </Nav>
        <Nav  to="/battle">
          Battle
        </Nav>
        <Nav to="/popular">
        Popular
        </Nav> 
      </glamorous.Div>
        );
    }
}

export default Navigation;