import { createSelector } from "reselect";

const Workers = state => state.workers;

export const selectWorkers = createSelector(
  [Workers],
  workers => workers.workers
);

export const selectIsWorkersFetching = createSelector(
  [Workers],
  workers => workers.isFetching
);

export const selectIsWorkerAdding = createSelector(
  [Workers],
  workers => workers.isAdding
);
