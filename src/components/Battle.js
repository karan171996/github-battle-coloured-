import React, { Component } from 'react';
import glamorous from 'glamorous';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import PlayerPreview from './PlayerPreview';
import {css} from 'glamor';

let column =css({
    display:'flex',
    flexDirection:'column',
    marginTop:200,
    width: 500,
    alignItems: 'center',
    '& .input' :{
    borderRadius: 3,
    paddingTop: 50,
    border: '1px solid rgba(0, 0, 0, 0.43)',
    fontSize: '16px',
    width: '80%',
    },
    '& .label':{
     textAlign: 'center',
     fontSize: '30px',
     fontWeight: 200
    }
});
const button = css({
    color: 'black',
    background: 'yellow',
    border: 'none',
    fontSize: 26,
    fontWeight: "bold",
    borderRadius: 3,
    height: 35,
    width: 200,
    textAlign: 'center',
    display: 'block',
    marginTop: 40,
    marginLeft: 20,
    ":hover,:enabled": {
        color: 'black',
        textDecoration: 'none'
    }
})
let header = css({
    textAlign: 'center',
    fontSize: '30px',
    fontweight: 200,
    color:'white'
})

class PlayerInput extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            username : ''
        };
    }
    handleChange(event){
        var value = event.target.value;
         this.setState(function(){
            return {
                username:value
            }
         });


    }
    handleSubmit(event){
        event.preventDefault();
        this.props.onSubmit(
            this.props.id,
            this.state.username
        );
    }
    render(){
      return(
        <form className = {`${column}`} onSubmit={this.handleSubmit.bind(this)}>
          <label className = {`${header}`} htmlFor = 'username' >
          {this.props.label}
          </label>
           <input
            id = 'username'
            placeholder = 'github username'
            type = 'text'
            autoComplete = 'off'
            value = {this.state.username}
            onChange = {this.handleChange.bind(this)}
             />
             <button
               className={`${button}`}
               type ='submit'
               disabled ={!this.state.username}>
               Submit
               </button>
        </form>
        )
    }
}

PlayerInput.propTypes ={
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired
}

PlayerInput.defaultProps ={
    label :'Username',
}
let row =css({
    display: 'flex',
    marginLeft: 60,
    justifyContent: 'space-around'
})
let buttonBattle =css({
  
        color: 'black',
        background: 'yellow',
        border: 'none',
        fontSize: 26,
        fontWeight: "bold",
        borderRadius: 3,
        height: 35,
        width: 200,
        textAlign: 'center',
        display: 'block',
        marginTop: 40,
        marginLeft: 650,
        ":hover,:enabled": {
            color: 'black',
            textDecoration: 'none'
        }
    
})
class Battle extends Component {
    constructor(props){
		super(props);
		this.state = {
         playerOneName:'',
         playerTwoName:'',
         playerOneImage:null,
         playerTwoImage:null,
		};
	}
	handleSubmit(id,username){
		this.setState(function(){
        var newState ={};
        newState[id +'Name'] = username;
        newState[id + 'Image'] = 'https://github.com/' + username + '.png?size=200';
        return newState;

		});
	}
    render() {
        var match = this.props.match;
        var playerOneName = this.state.playerOneName;
        var playerOneImage = this.state.playerOneImage;
        var playerTwoName = this.state.playerTwoName;
        var playerTwoImage = this.state.playerTwoImage;
        return (
            <glamorous.Div backgroundColor = "#343434" width="1440" height="750">
               <div className={`${row}`}>
               {!playerOneName &&
                <PlayerInput
                id ='playerOne'
                label ='Player One'
                onSubmit={this.handleSubmit.bind(this)}
                />}

               {
                playerOneImage !== null &&
                <PlayerPreview
                  avatar = {playerOneImage}
                  username = {playerOneName}
                  handleName ="Player 1">
                </PlayerPreview>}

               {!playerTwoName &&
                <PlayerInput
                id ='playerTwo'
                label ='Player Two'
                onSubmit={this.handleSubmit.bind(this)}
                />}

                {
                playerTwoImage !== null &&
                <PlayerPreview
                  avatar = {playerTwoImage}
                  username = {playerTwoName}
                  handleName="Player 2">
                  </PlayerPreview>}

              </div>
              {playerOneImage && playerTwoImage &&
                 <Link
                 className ={`${buttonBattle}`}
                 to={{
                    pathname:match.url + '/results',
                    search: `?playerOneName=` + playerOneName + '&playerTwoName=' +
                       playerTwoName
                 }}>
                 Battle
                 </Link>}
            </glamorous.Div>
        );
    }
}

export default Battle;