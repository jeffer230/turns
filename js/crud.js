var db = firebase.firestore();

// add
function add() {

  var first= $("#first").val();
  var last = $("#last").val();
  var email = $("#email").val();
  var cellphone = $("#cellphone").val();
  var address = $("#address").val();

  db.collection("users").add({
    first: "Ada",
    last: "Lovelace",
    born: 1815
  })
  .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
  })
  .catch(function(error) {
      console.error("Error adding document: ", error);
  });

}
