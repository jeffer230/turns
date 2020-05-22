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
                        <div class="btn-group">
                          <button class="btn btn-danger" 
                                  title="Borrar" 
                                  data-id="${doc.id}" 
                                  data-tablet="clientes" 
                                  onclick="borrar('${doc.id}', 'clientes')">
                             <i class="fa fa-pencil"></i> 
                             Borrar
                          </button>
                          <button class="btn 
                                btn-warning" 
                                title="Editar" 
                                data-id="${doc.id}" 
                                data-tablet="clientes" 
                                onclick="editar('${doc.id}', 'clientes')">
                             <i class="fa fa-pencil"></i> 
                             Editar
                          </button>
                        </div>
                      </td>
                  </tr>`;

        $("#customers").append(html);
      });
    });
  };

  // funcion leer cliente
  function readCustomer(id,tablet) {
    var docRef = db.collection(tablet).doc(id);
    docRef.get().then(function(doc) {
        if (doc.exists) {
          //console.log("Document data:", doc.data());
          $("#docid").val(doc.id);
          $("#doc").val(doc.data().doc);
          $("#name").val(doc.data().name);
          $("#lastname").val(doc.data().lastname);
          $("#email").val(doc.data().email);
          $("#phone").val(doc.data().phone);
          $("#address").val(doc.data().address);
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
            alert("No existe un cliente relacionado al ID");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
  };

  // editar cliente
  $('.editCliente').on("click", function( event ) {  
      event.preventDefault();
      if( $('#docid').val() != ''
        || $('#doc').val() != '' 
        || $('#name').val() != '' 
        || $('#lastname').val() != '' 
        || $('#email').val() != '' 
        || $('#phone').val() != '' 
        || $('#address').val() != '' 
        ){
        var id = $("#docid").val();
        var doc = $("#doc").val();
        var name = $("#name").val();
        var lastname = $("#lastname").val();
        var email = $("#email").val();
        var phone = $("#phone").val();
        var address = $("#address").val();
        // add customer
        editCustomer(id,doc,name,lastname,email,phone,address);
      } else {
        alert('Por favor diligencie todos los campos');
      }
  });

  // funcion editar cliente
  function editCustomer(id,doc,name,lastname,email,phone,address) {
    var editCustomer = db.collection("clientes").doc(id);
    return editCustomer.update({
        doc: doc,
        name: name,
        lastname: lastname,
        email: email,
        phone: phone,
        address: address
    })
    .then(function() {
        alert('Cliente actualizado con éxito');
        $(location).attr('href','clientes.php');
    })
    .catch(function(error) {
        // The document probably doesn't exist.
        console.error("Error al actualizar el Cliente: ", error);
    });
  };

  // *********** Giros ******************
  // registrar el giro
  $('.registrarGiro').on("click", function (event) {
      event.preventDefault();

      if ($('#remitente').val() != '' 
          || $('#destino').val() != '' 
          || $('#valorGiro').val() != ''
          || $('#fechaGiro').val() != ''
          || $('#direccion').val() != ''
          || $('#ciudad').val() != ''
          ) {
          var remitente = $("#remitente").val();
          var destino = $("#destino").val();
          var valorGiro = $("#valorGiro").val();
          var fechaGiro = $("#fechaGiro").val();
          var direccion = $("#direccion").val();
          var ciudad = $("#ciudad").val();

          
          console.log(remitente);
          console.log(destino);
          console.log(valorGiro);
          console.log(fechaGiro);
          console.log(direccion);
          console.log(ciudad);



          addGiro(remitente, destino, valorGiro, fechaGiro, direccion, ciudad);
      } else {
          alert('Por favor diligencie todos los campos');
      }
  });

  // funcion agregar nuevo giro
  function addGiro(remitente, destino, valorGiro, fechaGiro, direccion, ciudad){
    db.collection("giros").add({
        remitente: remitente,
        destino: destino,
        valorGiro: valorGiro,
        fechaGiro: fechaGiro,
        direccion: direccion,
        ciudad: ciudad

    })
    .then(function (docRef) {
          alert("se creo el registro con el id" + docRef.id);
          girosForm.reset();
    })
    .catch(function (error) {
         console.error("Error creando el giro: ", error);
    });
  };

  // funcion leer giros
  function readGiros() {
    console.log('ok');
    db.collection("giros").onSnapshot((querySnapshot) => {
      $("#giros").empty();
      querySnapshot.forEach((doc) => {
          //console.log(`${doc.id} => ${doc.data()}`);
          var html = `<tr>
                        <td>${doc.data().fechaGiro}</td>
                        <td>${doc.data().valorGiro}</td>
                        <td>${doc.data().remitente}</td>
                        <td>${doc.data().destino}</td>
                        <td>${doc.data().direccion}</td>
                        <td>${doc.data().ciudad}</td>
                        <td>
                        <div class="btn-group">
                          <button class="btn btn-danger" title="Borrar" data-id="${doc.id}" data-tablet="giros" onclick="borrar('${doc.id}', 'giros')">
                             <i class="fa fa-pencil"></i> 
                             Borrar
                          </button>
                          <button class="btn 
                                btn-warning" 
                                title="Editar" 
                                data-id="${doc.id}" 
                                data-tablet="clientes" 
                                onclick="editar('${doc.id}', 'giros')">
                             <i class="fa fa-pencil"></i> 
                             Editar
                          </button>
                        </div>
                        </td>
                    </tr>`;

          $("#giros").append(html);
      });
    });
  };

  // funcion leer giro
  function readGiro(id,tablet) {
    var docRef = db.collection(tablet).doc(id);
    docRef.get().then(function(doc) {
        if (doc.exists) {
          //console.log("Document data:", doc.data());
          $("#docid").val(doc.id);
          $("#remitente").val(doc.data().remitente);
          $("#destino").val(doc.data().destino);
          $("#valorGiro").val(doc.data().valorGiro);
          $("#fechaGiro").val(doc.data().fechaGiro);
          $("#direccion").val(doc.data().direccion);
          $("#ciudad").val(doc.data().ciudad);
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
            alert("No existe un giro relacionado al ID");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
  };

  // editar giro
  $('.editGiro').on("click", function( event ) {  
      event.preventDefault();
      if ($('#docid').val() != ''
          ||$('#remitente').val() != '' 
          || $('#destino').val() != '' 
          || $('#valorGiro').val() != ''
          || $('#fechaGiro').val() != ''
          || $('#direccion').val() != ''
          || $('#ciudad').val() != ''
          ) {
          var id = $("#docid").val();
          var remitente = $("#remitente").val();
          var destino = $("#destino").val();
          var valorGiro = $("#valorGiro").val();
          var fechaGiro = $("#fechaGiro").val();
          var direccion = $("#direccion").val();
          var ciudad = $("#ciudad").val();

          editGiro(id,remitente,destino,valorGiro,fechaGiro,direccion,ciudad);
      } else {
          alert('Por favor diligencie todos los campos');
      }
  });

  // funcion editar cliente
  function editGiro(id,remitente,destino,valorGiro,fechaGiro,direccion,ciudad) {
    var editgiro = db.collection("giros").doc(id);
    return editgiro.update({
        remitente: remitente,
        destino: destino,
        valorGiro: valorGiro,
        fechaGiro: fechaGiro,
        direccion: direccion,
        ciudad: ciudad
    })
    .then(function() {
        alert('Giro actualizado con éxito');
        $(location).attr('href','historialGiro.php');
    })
    .catch(function(error) {
        // The document probably doesn't exist.
        console.error("Error al actualizar el Giro: ", error);
    });
  };


  function LoadCustomer() {
    var db = firebase.firestore(); //Mando a llamar la instancia de base de datos
    var selected_item = document.getElementById('remitente');//Se llama el selected
    selected_item.innerHTML = '';
    selected_item.innerHTML += `<option value="0" selected>Selecciona cliente remitente</option> ` //Agrego un option por default
    //select 2 destinantario 
    var selected_item2 = document.getElementById('destino');//Se llama el selected
    selected_item2.innerHTML = '';
    selected_item2.innerHTML += `<option value="0" selected>Selecciona cliente destino</option> ` //Agrego un option por default

    db.collection("clientes").onSnapshot((querySnapshot) => { //Se llaman los datos
        querySnapshot.forEach((doc) => {
           // console.log(`${doc.id} => ${doc.data().name}`);
            selected_item.innerHTML += `<option value="${doc.id}">${doc.data().name}</option> .` //Aquí agrego los options de acuerdo a la base de datos.
            selected_item2.innerHTML += `<option value="${doc.id}">${doc.data().name}</option> .` //Aquí agrego los options de acuerdo a la base de datos.
        });
    });
  };

  function LoadCities() {
    var db = firebase.firestore(); //Mando a llamar la instancia de base de datos
    var selected_item = document.getElementById('ciudad');//Se llama el selected
    selected_item.innerHTML = '';
    selected_item.innerHTML += `<option value="0" selected>Selecciona ciudad </option> ` //Agrego un option por default
 
    db.collection("ciudad").onSnapshot((querySnapshot) => { //Se llaman los datos
        querySnapshot.forEach((doc) => {
            // console.log(`${doc.id} => ${doc.data().name}`);
            selected_item.innerHTML += `<option value="${doc.id}">${doc.data().name}</option> .` //Aquí agrego los options de acuerdo a la base de datos.
        });
    });
  };

  

    // Create an initial document to update.
   
 // var frankDocRef = db.collection("users").doc("frank");
    // frankDocRef.set({
    //     name: "Frank",
    //     favorites: { food: "Pizza", color: "Blue", subject: "recess" },
    //     age: 12
    // });

  // ********* rutas ****************
  // validar la ruta 
  var pathname = $(location).attr('pathname');
  if (pathname == '/turns/clientes.php') {
    readCustomers();
  }
  if (pathname == '/turns/historialGiro.php') {
    readGiros();
  }
  if (pathname == '/turns/registrarGiro.php') {
    LoadCustomer();
    LoadCities();
  }
  if (pathname == '/turns/editarCliente.php') {
    var editId = localStorage.getItem("editId");
    var editTablet = localStorage.getItem("editTablet");
    if (editId != null || editTablet != null) {
      readCustomer(editId,editTablet); 
    }else{
      alert("No hay cliente para consultar");
    } 
  }

  if (pathname == '/turns/editarGiro.php') {
    LoadCustomer();
    LoadCities();
    var editId = localStorage.getItem("editId");
    var editTablet = localStorage.getItem("editTablet");
    if (editId != null || editTablet != null) {
      readGiro(editId,editTablet); 
    }else{
      alert("No hay cliente para consultar");
    } 
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

// *********** Editar *************** 
function editar(id,tablet) {
  localStorage.setItem("editId",id);
  localStorage.setItem("editTablet",tablet);
  if (tablet=='clientes') {
    $(location).attr('href','editarCliente.php'); 
  } 
  if (tablet=='giros') {
    $(location).attr('href','editarGiro.php'); 
  } 
  
};

