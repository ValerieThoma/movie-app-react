import React, { Component } from 'react';
import $ from 'jquery';

class SearchBar extends Component{
	constructor(){
		super();
	this.handleChange = this.handleChange.bind(this);	
	}	
	

	handleChange(e){
		e.preventDefault();
		this.props.searchFunction($('#searchTerm').val());
	}

	render(){
		return(
			<div>
				<form onSubmit={this.handleChange}>
		         <input onChange={this.handleChange} id="searchTerm" type="text" placeholder="Movie Title" />
		         <button type="submit" className="btn btn-warning">Search</button>
		        </form>
        	</div>
		)
	}
}

export default SearchBar;