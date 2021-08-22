import Firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

//Seed the database

//Config

const config = {
    apiKey: "AIzaSyDrOTUajeOGtARioOU8OLu0Nr8KHKhmBKE",
    authDomain: "netflix-89e68.firebaseapp.com",
    projectId: "netflix-89e68",
    storageBucket: "netflix-89e68.appspot.com",
    messagingSenderId: "791642926381",
    appId: "1:791642926381:web:c29ce9b713093e459b37a4",
    measurementId: "G-HTF5CBFXLV"
};

const firebase = Firebase.initializeApp(config);

export { firebase };