import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCQRF68yvXTdRf_8GMv3d9nqYv7MCI497A",
    authDomain: "inchirierimasini-42f3e.firebaseapp.com",
    databaseURL: "https://inchirierimasini-42f3e.firebaseio.com",
    projectId: "inchirierimasini-42f3e",
    storageBucket: "inchirierimasini-42f3e.appspot.com",
    messagingSenderId: "38764743413",
    appId: "1:38764743413:web:16ee9d9b813632dc6b53bc"
  };
  // Initialize Firebase
 const fire = firebase.initializeApp(firebaseConfig);
 export default fire;