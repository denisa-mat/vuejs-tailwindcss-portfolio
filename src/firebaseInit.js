// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBW20etypflW50RD5TQ31XPTfRP7ncZRMY",
	authDomain: "myportfolio-ddm.firebaseapp.com",
	projectId: "myportfolio-ddm",
	storageBucket: "myportfolio-ddm.appspot.com",
	messagingSenderId: "760549236004",
	appId: "1:760549236004:web:eb30caa0a62fbbe08ba7b1"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export {
	firebase
}
