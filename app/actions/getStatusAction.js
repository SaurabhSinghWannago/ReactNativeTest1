import * as types from './actionTypes';

export function getStatusData() {
  return (dispatch) => {
    dispatch(fetchingStatus())
    fetch('https://app-alpha.wannago.com/status')
    .then(data => data.json())
    .then(json => {
      console.log('json:', json)
      console.log('json content:', json.content)
      dispatch(fetchingStatusSuccess(json.content))
    })
    .catch(err => dispatch(fetchingStatusFailed(err)))
  }
}

export function fetchingStatus() {
  return {
    type: types.FETCHING_STATUS
  }
}

export function fetchingStatusSuccess(data) {
  return {
    type: types.FETCH_STATUS_SUCCESS,
    data,
  }
}

export function fetchingStatusFailed() {
  return {
    type: types.FETCH_STATUS_FAILED
  }
}