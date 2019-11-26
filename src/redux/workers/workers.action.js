import { workersActionTypes } from "./workers.types";

export const workersFetchStart = uid => ({
  type: workersActionTypes.WORKERS_FETCH_START,
  payload: uid
});

export const wokersFetchFailure = error => ({
  type: workersActionTypes.WORKERS_FETCH_FAILURE,
  payload: error.message
});

export const workersFetchSuccess = workers => ({
  type: workersActionTypes.WORKERS_FETCH_SUCCESS,
  payload: workers
});

export const addWorkerStart = (workerCredentials, uid) => ({
  type: workersActionTypes.ADD_WORKER_START,
  payload: { workerCredentials, uid }
});

export const addWorkerSuccess = () => ({
  type: workersActionTypes.ADD_WORKER_SUCCESS
});

export const addWorkerFailure = error => ({
  type: workersActionTypes.ADD_WORKER_FAILURE,
  payload: error.message
});

export const clearWorkers = () => ({
  type: workersActionTypes.CLEAR_WORKERS
});
