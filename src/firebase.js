import firebase from 'firebase/app';
import 'firebase/auth';
var firebaseConfig = {
    apiKey: "AIzaSyA0MtrrXskl2PXCxc0w-OZ_nvAtBJdXnwg",
    authDomain: "auth-dev-8c933.firebaseapp.com",
    databaseURL: "https://auth-dev-8c933-default-rtdb.firebaseio.com",
    projectId: "auth-dev-8c933",
    storageBucket: "auth-dev-8c933.appspot.com",
    messagingSenderId: "343276806429",
    appId: "1:343276806429:web:fb6e4ac3f86fc80eff81f4"
  };
// Initialize Firebase
const app=firebase.initializeApp(firebaseConfig);


export const auth=app.auth();
export default app;