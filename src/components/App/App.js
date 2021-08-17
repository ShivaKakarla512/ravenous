import React from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import Yelp from '../../util/Yelp';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {businesses : []};
    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp(term, location, sortBy) {
    Yelp.search(term, location, sortBy).then(businesses => {
      this.setState({businesses: businesses});
    });
  }

  render () {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchYelp={this.searchYelp}/>
        <p>If search doesn't work, try gaining access to <a target='_blank' href='https://cors-anywhere.herokuapp.com'>cors</a></p>
        <BusinessList businesses={this.state.businesses}/>
      </div>
    );
  }
}

export default App;
