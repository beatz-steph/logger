import { call, all, put, takeLatest } from "redux-saga/effects";
import { workersActionTypes } from "./workers.types";
import { firestore } from "../../firebase/firebase";
import { collectedWorkerDetails } from "../../utilities";

import {
  workersFetchSuccess,
  wokersFetchFailure,
  addWorkerFailure,
  addWorkerSuccess
} from "./workers.action";

export function* WorkersFetchStart({ payload }) {
  try {
    const workersCollectionRef = yield firestore
      .collection(`users/${payload}/workers`)
      .get();
    yield put(
      workersFetchSuccess(workersCollectionRef.docs.map(collectedWorkerDetails))
    );
  } catch (error) {
    yield put(wokersFetchFailure(error));
  }
}

export function* WorkerAddingStart({ payload: { uid, workerCredentials } }) {
  try {
    yield firestore.collection(`users/${uid}/workers`).add(workerCredentials);
    yield put(addWorkerSuccess());
  } catch (error) {
    yield put(addWorkerFailure(error));
  }
}

export function* onWorkersFetchStart() {
  yield takeLatest(workersActionTypes.WORKERS_FETCH_START, WorkersFetchStart);
}

export function* onWorkerAddingStart() {
  yield takeLatest(workersActionTypes.ADD_WORKER_START, WorkerAddingStart);
}

export function* workersSaga() {
  yield all([call(onWorkersFetchStart), call(onWorkerAddingStart)]);
}
