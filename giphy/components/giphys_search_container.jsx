import { connect } from 'react-redux';
import React from 'react';
import GiphysSearch from './giphys_search';
import { fetchSearchGiphys } from '../actions/giphy_actions';

const mapStateToProps = state => {
  console.log(state);
  return {giphys: state.giphys};
};

const mapDispatchToProps = { fetchSearchGiphys };

// dispatch => {
//   return { fetchSearchGiphys: (searchTerm) => dispatch(fetchSearchGiphys(searchTerm)) };
// };

export default connect(mapStateToProps, mapDispatchToProps)(GiphysSearch);
