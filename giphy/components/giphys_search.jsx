import React from 'react';

import GiphysIndex from './giphys_index';

class giphysSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  // update(property) {
  //   return e => this.setState({[property]: e.target.value});
  // }

  update(e){
    this.setState({searchTerm: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.fetchSearchGiphys(this.state.searchTerm);
    this.setState({searchTerm: ''});
  }

  render(){
    return (
      <div>
        <form>
          <label>Title:
            <input
              value={this.state.searchTerm}
              onChange={this.update}
              />
          </label>
          <button type="submit" onClick={this.handleSubmit}>Search Giphy</button>
        </form>
        <GiphysIndex giphys={this.props.giphys}/>
      </div>
    );
  }
}


export default giphysSearch;


// Render a search form with an input field and submit button
// Create a handleChange function that updates the search term state when a user types in the input field
// Create ahandleSubmit function that fetches giphys when the submit button is clicked.
// Create GiphysIndex and giphysIndexItems functional components to render the results from your GiphysSearch

// You can do it!
