function load(){
  var firebaseConfig = {
      apiKey: "AIzaSyAMeAx6mxOUQ9q7RvgBBIlft0A_tWXNNNU",
      authDomain: "turns-964b3.firebaseapp.com",
      databaseURL: "https://turns-964b3.firebaseio.com",
      projectId: "turns-964b3",
      storageBucket: "turns-964b3.appspot.com",
      messagingSenderId: "850788494247",
      appId: "1:850788494247:web:6c2c55797ca2b0912be482",
      measurementId: "G-Y97WX6W9RQ"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    console.log('conectado con Firebase');
 }
 