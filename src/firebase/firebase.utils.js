import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyA5u5EZt7zLSUIA6TFGOcKYhtgPeA2Cr9o",
    authDomain: "crwn-db-67ebb.firebaseapp.com",
    projectId: "crwn-db-67ebb",
    storageBucket: "crwn-db-67ebb.appspot.com",
    messagingSenderId: "172073268867",
    appId: "1:172073268867:web:9c68492670284f5ea90db6",
    measurementId: "G-LNNG6N0T8X"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;