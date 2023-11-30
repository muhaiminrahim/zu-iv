import firebase from "firebase/compat/app"
import "firebase/compat/auth"

const credentials = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.measurementId
}
firebase.initializeApp(credentials)
const auth = firebase.auth()
const googleProvider = new firebase.auth.GoogleAuthProvider();

export const signIn = () => auth.signInWithPopup(googleProvider)

export default firebase