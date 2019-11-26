import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyBQzf7o0Av71khRDHhwCSHGwzhVDRYnST4",
  authDomain: "logger-6e3f3.firebaseapp.com",
  databaseURL: "https://logger-6e3f3.firebaseio.com",
  projectId: "logger-6e3f3",
  storageBucket: "logger-6e3f3.appspot.com",
  messagingSenderId: "233199945617",
  appId: "1:233199945617:web:6a5f30496989674e07fc30",
  measurementId: "G-214EY16743"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const auth = firebase.auth();

export const googleProvider = new firebase.auth.GoogleAuthProvider();

googleProvider.setCustomParameters({ prompt: "select_account" });

export const SignInWithGoogle = () => auth.signInWithPopup(googleProvider);
export const signOut = () => auth.signOut();

export const signInWithEmail = async (email, password) => {
  const userAuth = await auth.signInWithEmailAndPassword(email, password);
  return userAuth;
};

export const signUp = async (email, password) => {
  const userAuth = await auth.createUserWithEmailAndPassword(email, password);
  return userAuth;
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(userAuth => {
      resolve(userAuth);
      unsubscribeFromAuth();
    }, reject);
  });
};

export const createUserProfileDocument = async (user, additionalData) => {
  if (!user) {
    return;
  }

  const userRefSnapshot = firestore.collection("users").doc(user.uid);

  if (!userRefSnapshot.get().exists) {
    const { displayName, photoURL, email } = user;

    try {
      userRefSnapshot.set({
        displayName,
        photoURL,
        email,
        ...additionalData
      });
    } catch (error) {}
  }

  getUserDocument(user.uid);
};

export const getUserDocument = async uid => {
  if (!uid) {
    return null;
  }

  try {
    const userDocument = await firestore
      .collection("users")
      .doc(uid)
      .get();

    return { uid, ...userDocument.data() };
  } catch (error) {
    console.log(error);
  }
};

window.firebase = firebase;

export default firebase;
