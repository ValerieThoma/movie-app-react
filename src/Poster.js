import React, {Component} from 'react';


class Poster extends Component{
	render(){
		var imagePath =  `http://image.tmdb.org/t/p/w300${this.props.poster}`;
		var singleMovie = `http://www.themoviedb.org/movie/${this.props.id}`;
		return(
			<div className="col-sm-3">
				<a href={singleMovie}><img src={imagePath}/></a>
				<h3>{this.props.title}</h3>
				<p>{this.props.alt}</p>
			</div>
		)
	}
}

export default Poster;