import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';
import Poster from './Poster';
import SearchBar from "./SearchBar";

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      movies: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
   // I will run one time!!!! After the first render — and never again!
  componentDidMount(){
    console.log("the component mounted");
    var url = 'http://api.themoviedb.org/3/movie/now_playing?api_key=fec8b5ab27b292a68294261bb21b04a5';
    $.getJSON(url,(movieData)=>{
      console.log(movieData);
      this.setState({
        movies: movieData.results
      })
    });
  }
  handleSubmit(movieValue){
    var value = document.getElementById('searchTerm').value;
    var url = 'https://api.themoviedb.org/3/search/movie?api_key=fec8b5ab27b292a68294261bb21b04a5&query='+value
    $.getJSON(url,(movieSearchData)=>{
      this.setState({
        movies: movieSearchData.results
      })
    })
  }

  render() {
    var postersArray = [];
    this.state.movies.map((movie,index)=>{
     postersArray.push(<Poster key={index} alt={movie.overview} title={movie.title} id={movie.id} poster={movie.poster_path} />)
    });
    return (
      <div className="App">
        <h1>I'm a movie app</h1>
        <SearchBar searchFunction={this.handleSubmit}/>
        {postersArray}
      </div>
    );
  }
}

export default App;
