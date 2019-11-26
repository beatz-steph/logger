import { userActionTypes } from "./user.types";

export const googleSignInstart = () => ({
  type: userActionTypes.GOOGLE_SIGN_IN_START
});

export const emaiSignInStart = (email, password) => ({
  type: userActionTypes.EMAIL_SIGN_IN_START,
  payload: { email, password }
});

export const signInSucces = user => ({
  type: userActionTypes.SIGN_IN_SUCCESS,
  payload: user
});

export const signInFailure = error => ({
  type: userActionTypes.SIGN_IN_FAILURE,
  payload: error.message
});

export const signUpStart = userCredentials => ({
  type: userActionTypes.SIGN_UP_START,
  payload: userCredentials
});

export const signUpSuccess = (user, additionalData) => ({
  type: userActionTypes.SIGN_UP_SUCCESS,
  payload: { user, additionalData }
});

export const signUpFailure = error => ({
  type: userActionTypes.SIGN_UP_FAILURE,
  payload: error.message
});

export const signOutStart = () => ({
  type: userActionTypes.SIGN_OUT_START
});

export const signOutSuccess = () => ({
  type: userActionTypes.SIGN_OUT_SUCCESS
});

export const signOutFailure = error => ({
  type: userActionTypes.SIGN_OUT_FAILURE,
  payload: error.message
});

export const checkUserSession = () => ({
  type: userActionTypes.CHECK_USER_SESSION
});
