import firebase from 'firebase';

var firebaseConfig={
        apiKey: "AIzaSyCrmK58ot7LXH2-SP1Mi3NDEaGJTEQhKqg",
        authDomain: "react-contact-c01a9.firebaseapp.com",
        projectId: "react-contact-c01a9",
        storageBucket: "react-contact-c01a9.appspot.com",
        messagingSenderId: "805813815400",
        appId: "1:805813815400:web:9799cd39c96a51952513dd"
         
};
var fire= firebase.initializeApp(firebaseConfig);
export default  fire;
