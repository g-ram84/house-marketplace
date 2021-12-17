// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyDj1v27mmnJRQ089T8XXe4nYzxu5zzINOo",
	authDomain: "house-marketplace-app-338d0.firebaseapp.com",
	projectId: "house-marketplace-app-338d0",
	storageBucket: "house-marketplace-app-338d0.appspot.com",
	messagingSenderId: "925161841984",
	appId: "1:925161841984:web:58bb25f615e3dd05a5c6a5",
	measurementId: "G-J9DZQJ4G1T"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
