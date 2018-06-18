import React, { Component } from 'react';
import PropTypes from 'prop-types';
import api from './utils/api';
import Loading from './Loading';
import {css} from 'glamor';
import glamorous from 'glamorous';
let lan =css({
display:'flex',
marginLeft:450
})
let list =css({
	marginLeft:30,
	fontWeight:'bold'
})
function SelectLanguage(props){
	var languages =['All','Javascript','Ruby','Java','CSS','Python'];
			return (
			<ul className ={`${lan}`}>
			{languages.map(function(lang){
				return(
					<li 
					className={`${list}`}
					style = {lang === props.selectedLanguage ? {color:'yellow'}:null}
					onClick = { props.onSelect.bind(null,lang)} 
					key={lang}>
					{lang}
					</li>
					)
			})}
			</ul>
			)
}
let popularList =css({
	display:'flex',
	flexWrap: 'wrap',
	justifyContent: 'space - around'
})
let popularItem =css({
	marginLeft: 24,
	textAlign: 'center',
	listStyle:'none'
})
let popularRank =css({
	fontSize: 20,
	margin: 10 
})
let spaceListItems =css({
	marginBottom: 7, 
	width:180,
	marginLeft:10
})
let avatar =css({
	width: 150,
	borderRadius: 50 
})
function RepoGrid (props) {
  return (
    <ul className={`${popularList}`}>
      {props.repos.map(function (repo, index) {
        return (
          <li key={repo.name} className={`${popularItem}`}>
            <div className={`${popularRank}`} style={{color:'red'}}>#{index + 1}</div>
            <ul className={`${spaceListItems}`}>
                <img
                  className={`${avatar}`}
                  src={repo.owner.avatar_url}
                  alt={'Avatar for ' + repo.owner.login}
                />
              <li style={{listStyle:'none'}}><a href={repo.html_url}>{repo.name}</a></li>
              <li style={{color:'purple',listStyle:'none'}}>@{repo.owner.login}</li>
              <li style={{color:'orange',listStyle:'none'}}>{repo.stargazers_count} stars</li>
            </ul>
          </li>
        )
      })}
    </ul>
  )
}
RepoGrid.propTypes = {
  repos: PropTypes.array.isRequired,
}
// class SelectLanguage extends React.Component{
// 	render(){
// 		var languages =['All','Javascript','Ruby','Java','CSS','Python'];
// 			return (
// 			<ul className = 'languages'>
			
// 			{languages.map(function(lang){
// 				return(
// 					<li
// 					style = {lang === this.props.selectedLanguage ? {color:'#d0021b'}:null}
// 					onClick = { this.props.onSelect.bind(this,lang)} 
// 					key={lang}>
// 					{lang}
// 					</li>
// 					)
// 			},this)}
// 			</ul>
// 			)
// 		}
// }
SelectLanguage.propTypes = {
	selectedLanguage:PropTypes.string.isRequired,
	onSelect:PropTypes.func.isRequired
}; 

class Popular extends  React.Component {
	constructor(props){
		super();
		this.state = {
			selectedLanguage :'All',
			repos :null
		};
	}
		//this.updateLanguage = this.updateLanguage.bind(this);
		componentDidMount(){
			this.updateLanguage(this.state.selectedLanguage);
		}
	
	updateLanguage(lang){
		this.setState(function(){
			return {
				selectedLanguage : lang,
			     repos:null
			 }
		});

		api.fetchPopularRepos(lang)
			   .then(function(repos){
			   	this.setState(function(){
			   		return{
			   		repos: repos
			   	}
			   	});
			   }.bind(this));
	}

	render(){
		// var name1 =['Tyler','rayman','krishna'];
		return(
			<glamorous.Div backgroundColor = "#343434">
			   <SelectLanguage 
			      selectedLanguage={this.state.selectedLanguage}
			      onSelect={this.updateLanguage.bind(this)}/>
			{!this.state.repos 
				? <Loading />
				:<RepoGrid repos={this.state.repos} />}	
			</glamorous.Div>
			
		
			)
	}
}

export default Popular;