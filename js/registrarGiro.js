$(document).ready(function () {
    LoadCustomer();
    LoadCities();
});

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
}