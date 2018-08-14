import React, { Component } from 'react';
import {connect} from 'react-redux';

import { movieslist,dirlist } from '../actions/index.js';
import {bindActionCreators} from "redux";


class App extends Component {
  componentWillMount(){
      this.props.movieslist();
      this.props.dirlist();
  }
  
  render() {
    console.log(this.props)
    return (
      <div className="App">
        hello
        {this.renderMovies(this.props.data.movies)}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data : state.movies
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    movieslist,
    dirlist
  },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
