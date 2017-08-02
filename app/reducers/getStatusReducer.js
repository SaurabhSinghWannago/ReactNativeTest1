import * as types from '../actions/actionTypes';
import * as actions from '../actions/getStatusAction';

const initialState = {
  content: {},
  isFetching: false,
  error: false
}

export default function getStatusReducer (state = initialState, action) {
  switch (action.type) {
    case types.FETCHING_STATUS:
      return {
        ...state,
        content: {},
        isFetching: true
      }
    case types.FETCH_STATUS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        content: action.data
      }
    case types.FETCH_STATUS_FAILED:
      return {
        ...state,
        isFetching: false,
        error: true
      }
    default:
      return state
  }
}