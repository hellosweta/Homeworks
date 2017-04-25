import * as APIUtil from '../util/api_util';
export const RECEIVE_SEARCH_GIPHYS = 'RECEIVE_SEARCH_GIPHYS';
export const REQUEST_SEARCH_GIPHYS = 'REQUEST_SEARCH_GIPHYS';

export const receiveSearchGiphys = giphys => ({
    type: RECEIVE_SEARCH_GIPHYS,
    giphys
});

export const fetchSearchGiphys = (searchTerm) => (
    (dispatch) => {
      console.log(searchTerm);
      return APIUtil.fetchSearchGiphys(searchTerm)
        .then(giphys => {
          console.log(giphys);
          return dispatch(receiveSearchGiphys(giphys.data));
      });
    }

);
