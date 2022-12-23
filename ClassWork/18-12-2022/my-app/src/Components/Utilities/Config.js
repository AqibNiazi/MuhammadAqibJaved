import { initializeApp } from "firebase/app";
import { getAuth ,signInWithEmailAndPassword,createUserWithEmailAndPassword,GoogleAuthProvider,signOut} from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyASeDqfD2eKpX5_9oywW2wv-gBu59mxGlQ",
    authDomain: "foodorderingsystem-e4122.firebaseapp.com",
    projectId: "foodorderingsystem-e4122",
    storageBucket: "foodorderingsystem-e4122.appspot.com",
    messagingSenderId: "1064268905873",
    appId: "1:1064268905873:web:ef18b9bff139840266ee30",
    measurementId: "G-KTT3YP3XMR"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service

const provider = new GoogleAuthProvider();
const auth = getAuth(app);
export  {auth,signInWithEmailAndPassword,createUserWithEmailAndPassword,signOut,provider}
