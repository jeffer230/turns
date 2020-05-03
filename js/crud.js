$(document).ready(function(){

  // referencia a la base de datos firebase
  var db = firebase.firestore();

  // guardar nuevo cliente
  $('.registrar').on("click", function( event ) {  
      event.preventDefault();

      console.log();

      if( $('#doc').val() != '' || $('#name').val() != '' || $('#lastname').val() != '' ){
        var doc = $("#doc").val();
        var name = $("#name").val();
        var lastname = $("#lastname").val();

        console.log(doc);
        console.log(name);
        console.log(lastname);
        addCustomer(doc,name,lastname);
      } else {
        alert('Por favor diligencie todos los campos');
      }
  });


  function addCustomer(doc,name,lastname) {

    db.collection("clientes").add({
      doc: doc,
      name: name,
      lastname: lastname
     
    })
    .then(function(docRef) {
        console.log("El cliente se creo con el ID: ", docRef.id);
        alert("se creo el cliente con el id"+docRef.id );
        contactForm.reset(); 
    })
    .catch(function(error) {
        console.error("Error creando el cliente: ", error);
    });
  };

// add
function addgiro(numerodoc,nombres,apellidos) {

  db.collection("giros").add({
    
  })
  .then(function(docRef) {
      console.log("se creo el giro con el ID: ", docRef.id);
      alert("se creo el registro con el id"+docRef.id );
      
  })
  .catch(function(error) {
      console.error("Error creando el giro: ", error);
  });



}



//load older conatcts as well as any newly added one...
// contactsRef.on("child_added", function(snap) {
//   console.log("added", snap.key(), snap.val());
//   $('#contacts').append(contactHtmlFromObject(snap.val()));
// });


//prepare conatct object's HTML
// function contactHtmlFromObject(contact){
//   console.log( contact );
//   var html = '';
//   html += '<li class="list-group-item contact">';
//     html += '<div>';
//       html += '<p class="lead">'+contact.name+'</p>';
//       html += '<p>'+contact.email+'</p>';
//       html += '<p><small title="'+contact.location.zip+'">'
//                 + contact.location.city + ', '
//                 + contact.location.state + '</small></p>';
//     html += '</div>';
//   html += '</li>';
//   return html;
// }

});
