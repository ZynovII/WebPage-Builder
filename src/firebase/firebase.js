import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB1flg13Z2jkYgkRuGmtZwGrw9FGQvDVkg",
    authDomain: "web-page-builder.firebaseapp.com",
    databaseURL: "https://web-page-builder-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "web-page-builder",
    storageBucket: "web-page-builder.appspot.com",
    messagingSenderId: "646184516277",
    appId: "1:646184516277:web:a3654c0d599ef955a49cfc"
};
firebase.initializeApp(firebaseConfig);