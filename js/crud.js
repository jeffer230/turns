// referencia a la base de datos firebase
var db = firebase.firestore();

$(document).ready(function(){

  // *********** Clientes ******************
  // guardar nuevo cliente
  $('.registrar').on("click", function( event ) {  
      event.preventDefault();
      
      if( $('#doc').val() != '' 
        || $('#name').val() != '' 
        || $('#lastname').val() != '' 
        || $('#email').val() != '' 
        || $('#phone').val() != '' 
        || $('#address').val() != '' 
        ){
        var doc = $("#doc").val();
        var name = $("#name").val();
        var lastname = $("#lastname").val();
        var email = $("#email").val();
        var phone = $("#phone").val();
        var address = $("#address").val();
        // add customer
        addCustomer(doc,name,lastname,email,phone,address);
      } else {
        alert('Por favor diligencie todos los campos');
      }
  });

  // funcion agregar nuevo cliente
  function addCustomer(doc,name,lastname,email,phone,address) {
    db.collection("clientes").add({
      doc: doc,
      name: name,
      lastname: lastname,
      email: email,
      phone: phone,
      address: address
    })
    .then(function(docRef) {
        alert("se creo el cliente con el id"+docRef.id );
        contactForm.reset(); 
        //$('#myModal').modal('show')
    })
    .catch(function(error) {
        console.error("Error creando el cliente: ", error);
    });
  };

  // funcion leer clientes
  function readCustomers() {
    db.collection("clientes").onSnapshot((querySnapshot) => {
      $("#customers").empty();
      querySnapshot.forEach((doc) => {
        var html = `<tr>
                      <th scope="row">${doc.data().doc}</th>
                      <td>${doc.data().name}</td>
                      <td>${doc.data().lastname}</td>
                      <td>${doc.data().email}</td>
                      <td>${doc.data().phone}</td>
                      <td>${doc.data().address}</td>
                      <td>
                        <button class="btn btn-danger" title="Borrar" data-id="${doc.id}" data-tablet="clientes" onclick="borrar('${doc.id}', 'clientes')">
                           <i class="fa fa-pencil"></i> 
                           Borrar
                        </button>
                      </td>
                  </tr>`;

        $("#customers").append(html);
      });
    });
  };

  // *********** Giros ******************
  // registrar el giro
  $('.registrarGiro').on("click", function (event) {
      event.preventDefault();

      if ($('#nomRemitente').val() != '' || $('#docRemitente').val() != '' || $('#lugarEnvio').val() != '') {
          var nomRemitente = $("#nomRemitente").val();
          var docRemitente = $("#docRemitente").val();
          var lugarEnvio = $("#lugarEnvio").val();
          // console.log(nomRemitente);
          // console.log(docRemitente);
          // console.log(lugarEnvio);
          addGiro(nomRemitente, docRemitente, lugarEnvio);
      } else {
          alert('Por favor diligencie todos los campos');
      }
  });

  // funcion agregar nuevo giro
  function addGiro(nomRemitente, docRemitente, lugarEnvio) {
    db.collection("giros").add({
        nomRemitente: nomRemitente,
        docRemitente: docRemitente,
        lugarEnvio: lugarEnvio

    })
    .then(function (docRef) {
          alert("se creo el registro con el id" + docRef.id);
    })
    .catch(function (error) {
         console.error("Error creando el giro: ", error);
    });
  }

  // funcion leer giros
  function readGiros() {
    console.log('ok');
    db.collection("giros").onSnapshot((querySnapshot) => {
      $("#giros").empty();
      querySnapshot.forEach((doc) => {
          //console.log(`${doc.id} => ${doc.data()}`);
          var html = `<tr>
                        <th scope="row">${doc.data().nomRemitente}</th>
                        <td>${doc.data().docRemitente}</td>
                        <td>${doc.data().lugarEnvio}</td>
                        <td>
                          <button class="btn btn-danger" title="Borrar" data-id="${doc.id}" data-tablet="giros" onclick="borrar('${doc.id}', 'giros')">
                             <i class="fa fa-pencil"></i> 
                             Borrar
                          </button>
                        </td>
                    </tr>`;

          $("#giros").append(html);
      });
    });
  };

  // ********* rutas ****************
  // validar la ruta 
  var pathname = $(location).attr('pathname');
  if (pathname == '/turns/clientes.php') {
    readCustomers();
  }
  if (pathname == '/turns/historialGiro.php') {
    readGiros();
  }

});

// *********** Borrar ******************** 
function borrar(id,tablet) {
  if (confirm('Esta seguro de borrar el Item')) {
    db.collection(tablet).doc(id).delete().then(function() {
        console.log("Item Borrado con exito!"); 
    }).catch(function(error) {
        console.error("Error Borrando el Item: ", error);
    });   
  }else {
    console.log('No se borro el Item');
  } 
};

