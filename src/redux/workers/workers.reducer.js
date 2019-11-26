import { workersActionTypes } from "./workers.types";

const INITIAL_STATE = {
  workers: null,
  isFetching: false,
  isAdding: false,
  error: null
};

const workersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case workersActionTypes.WORKERS_FETCH_START:
      return {
        ...state,
        isFetching: true
      };

    case workersActionTypes.WORKERS_FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: null,
        workers: action.payload
      };

    case workersActionTypes.WORKERS_FETCH_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };

    case workersActionTypes.ADD_WORKER_START:
      return {
        ...state,
        isAdding: true
      };

    case workersActionTypes.ADD_WORKER_SUCCESS:
      return {
        ...state,
        isAdding: false,
        error: null
      };

    case workersActionTypes.ADD_WORKER_FAILURE:
      return {
        ...state,
        isAdding: false,
        error: action.payload
      };

    case workersActionTypes.CLEAR_WORKERS:
      return {
        ...INITIAL_STATE
      };

    default:
      return state;
  }
};

export default workersReducer;
