import { createSelector } from "reselect";

const selectUser = state => state.user;

export const selectUserCurrentUser = createSelector(
  [selectUser],
  user => user.currentUser
);

export const selectIsFetchingUser = createSelector(
  [selectUser],
  user => user.isFetching
);
