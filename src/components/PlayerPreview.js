 import React from 'react';
import PropTypes from 'prop-types';
import {css} from 'glamor';
import { Card, CardText, CardBody,
  CardTitle } from 'reactstrap';

  let handle = css({
    fontWeight:'bold',
    color:'black',
  })
 let card = css({
   marginTop:100,
   height:500,
   width: 300,
   backgroundColor:'blue'
 })
 let profilePic = css({
   width:150,
   borderRadius:180,
   marginLeft: 74,
   marginBottom:50
 })
 let title = css({
   fontWeight:'bold',
   color:'black',
   fontSize: 30
 })
function PlayerPreview(props){
    return(
    <div>
      <Card className={`${card}`} inverse>
        <CardBody>
          <CardTitle className={`${title}`}>{props.handleName}</CardTitle>
        </CardBody>
        <img
          className={`${profilePic}`}
          src={props.avatar}
          alt={'Avatar for ' + props.username}
        />
        <CardBody>
          <CardText className={`${handle}`}>@{props.username}</CardText>
          {props.children}
        </CardBody>
      </Card>
    </div>
    )
}
PlayerPreview.propTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    handleName: PropTypes.string.isRequired,
    
};
CardText.propTypes = {
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    className: PropTypes.string
};
Card.propTypes = {
      tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  inverse: PropTypes.bool,
};
CardBody.propTypes = {
    // Pass in a Component to override default element
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};
CardTitle.propTypes = {
    // Pass in a Component to override default element
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};
export default PlayerPreview;