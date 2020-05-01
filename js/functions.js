// firebase 
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
// 
console.log('conectado con Firebase');

$(document).ready(function(){
  
  // iniciar sesion
  $("#signin").click(function(){
    var email = $("#email").val();
    var password = $("#password").val();
    // console.log('Loging email ' + email);
    // console.log('Loging password ' + password);
    if (email != "" && password != "") {
        loginUser(email, password);
    } else {
      alert("Por favor diligencie todos los campos");
    }
    
  });

  //
  $("#signout").click(function(){
    signoutUser();
  });

  //
  function loginUser(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function (user) {
      console.log('Credenciales correctas, ¡bienvenido!');
      // location.href="home.php";
      // $(location).attr('href','home.php');
      loadhome();
    })
    .catch(function (error) {
      //console.log(error);
      alert("Credenciales Incorrectas");
    });
  };

  function signoutUser() {
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
      //alert("si signOut");
      localStorage.clear();
      loadhome();
    }).catch(function(error) {
      // An error happened.
    });
  };

  function loadhome(){
    // manejador de eventos para los cambios del estado de autenticación
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        //console.log('user',user)
        // User is signed in.
        // var displayName = user.displayName;
        // var email = user.email;
        // var emailVerified = user.emailVerified;
        // var photoURL = user.photoURL;
        // var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        // var providerData = user.providerData;
        localStorage.setItem("id",uid);
        $(location).attr('href','home.php'); 
      } else {
        console.log('no user')
        $(location).attr('href','index.php');
      }
    });
  };

});





 











