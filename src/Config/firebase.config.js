// Import the functions you need from the SDKs you need
import {
    initializeApp
} from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA98FtesgeAY6PcVa9AKIYAwCkvDo6VvUQ",
    authDomain: "bistro-boss-db6bd.firebaseapp.com",
    projectId: "bistro-boss-db6bd",
    storageBucket: "bistro-boss-db6bd.appspot.com",
    messagingSenderId: "366200352023",
    appId: "1:366200352023:web:c77c48c659c0df8e195b52"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
export default auth