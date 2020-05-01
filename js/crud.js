var db = firebase.firestore();

// add
function add() {

  var numero_doc= $("#document").val();
  var nombres= $("#name").val();
  var apellidos = $("#lastname").val();
  var email = $("#email").val();
  var celular = $("#cellphone").val();
  var direccion = $("#address").val();

  db.collection("Clientes").add({
    numero_doc: numero_doc,
    nombres: nombres,
    apellidos: apellidos,
    email: email,
    celular: celular,
    direccion: direccion,
  })
  .then(function(docRef) {
      console.log("El cliente se creo con el ID: ", docRef.id);
      
  })
  .catch(function(error) {
      console.error("Error creando el cliente: ", error);
  });

}
