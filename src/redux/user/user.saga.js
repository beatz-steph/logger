import { call, all, takeLatest, put } from "redux-saga/effects";
import { userActionTypes } from "./user.types";
import {
  getCurrentUser,
  SignInWithGoogle,
  getUserDocument,
  createUserProfileDocument,
  signInWithEmail,
  signUp,
  auth
} from "../../firebase/firebase";
import {
  signInFailure,
  signInSucces,
  signOutFailure,
  signOutSuccess,
  signUpFailure
} from "./user.actions";

export function* CheckUserSession() {
  try {
    const userAuth = yield call(getCurrentUser);
    if (userAuth === null) {
      yield put(signInFailure({ message: "no active user" }));
      return;
    }

    const uid = yield userAuth.uid;
    const user = yield call(getUserDocument, uid);

    if (!user) {
      yield put(signInFailure({ message: "no user document" }));
      return;
    }
    yield put(signInSucces(user));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* GoogleSignInStart() {
  try {
    const { user } = yield call(SignInWithGoogle);
    yield ValidSignInStart(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* ValidSignInStart(userAuth, additionalData) {
  try {
    const user = yield call(
      createUserProfileDocument,
      userAuth,
      additionalData
    );
    yield put(signInSucces(user));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* finishSignOut() {
  yield put(signOutSuccess());
}

export function* StartSignOut() {
  try {
    yield auth.signOut();
    yield finishSignOut();
  } catch (error) {
    yield put(signOutFailure(error));
  }
}

export function* EmailSignInStart({ payload: { email, password } }) {
  try {
    const userAuth = yield call(signInWithEmail, email, password);
    yield call(ValidSignInStart, userAuth);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* SignUpStart({
  payload: { email, password, firstname, surname }
}) {
  try {
    const userAuth = yield call(signUp, email, password);
    if (userAuth === null) {
      yield put(signUpFailure({ message: "couldnt create user" }));
      return;
    }

    const GottenUser = userAuth.user;

    yield call(ValidSignInStart, GottenUser, {
      displayName: `${firstname} ${surname}`
    });
  } catch (error) {
    yield put(signUpFailure(error));
  }
}

export function* onCheckUerSession() {
  yield takeLatest(userActionTypes.CHECK_USER_SESSION, CheckUserSession);
}

export function* onGoogleSignInStart() {
  yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, GoogleSignInStart);
}

export function* onSignOutStart() {
  yield takeLatest(userActionTypes.SIGN_OUT_START, StartSignOut);
}

export function* onEmailSignInStart() {
  yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, EmailSignInStart);
}

export function* onSignUpStart() {
  yield takeLatest(userActionTypes.SIGN_UP_START, SignUpStart);
}

export function* userSaga() {
  yield all([
    call(onCheckUerSession),
    call(onGoogleSignInStart),
    call(onSignOutStart),
    call(onEmailSignInStart),
    call(onSignUpStart)
  ]);
}
