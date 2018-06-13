import React, { Component } from 'react';
import glamorous from 'glamorous';
import { css} from 'glamor';
import {Link} from 'react-router-dom';

const button = css({
 color: 'black',
 background: 'yellow',
  border: 'none',
  fontSize: 36,
  fontWeight:"bold",
  borderRadius: 3,
  height:50,
  width: 200,
  textAlign: 'center',
  display: 'block',
   marginTop: 40,
  marginLeft: 600,
  ":hover,:enabled":{
      color: 'black',
      textDecoration: 'none'
  }
})
const HEADER =glamorous.h1({
    color:"white",
    fontWeight:"bold",
    fontSize:40,
    paddingTop:140,
    marginLeft:300,
})

class Home extends Component {
    render() {
        return (
            
                    <glamorous.Div backgroundColor = "#343434" width="1440" height="750">
                       <HEADER>Github Battle :Battle your friends ... and stuff.</HEADER>
                       <Link className={`${button}`}to='/battle'>
                       Battle
                       </Link>
                    </glamorous.Div>

        );
    }
}

export default Home;