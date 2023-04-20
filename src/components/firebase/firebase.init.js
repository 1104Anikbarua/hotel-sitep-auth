// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD6W17sd1sADexLMBAVwFRg5ZZRaqhwtpI",
    authDomain: "batch-7-m-10-m-6-hotel-site.firebaseapp.com",
    projectId: "batch-7-m-10-m-6-hotel-site",
    storageBucket: "batch-7-m-10-m-6-hotel-site.appspot.com",
    messagingSenderId: "691445655580",
    appId: "1:691445655580:web:904b5029c04bd689ad97d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;