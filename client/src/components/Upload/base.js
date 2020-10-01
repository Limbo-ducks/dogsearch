import firebase from 'firebase'
import 'firebase/storage'

export const app = firebase.initializeApp({
    "projectId": "dogsearch-a791c",
    "appId": process.env.FIREBASE_APP_ID,
    "databaseURL": "https://dogsearch-a791c.firebaseio.com",
    "storageBucket": "dogsearch-a791c.appspot.com",
    "apiKey": process.env.FIREBASE_SECRET,
    "authDomain": "dogsearch-a791c.firebaseapp.com",
    "messagingSenderId": "1073307553577"
  });