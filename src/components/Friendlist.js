import React from 'react';
import PropTypes from 'prop-types';

function Friendlist(props){
	return (
		<div>
	   <ul>
	   	{ props.name.map(function(names) {
	   		return (
	   			<li key={names}>{names}</li>
	   			)
	    })
	   }
	   </ul>
	   </div>
	   )
}
export default Friendlist;