function formu() {
  var nombre = document.getElementById("name").value;
  var correo = document.getElementById("email").value;
  var direccion = document.getElementById("direccion").value;
  var edad = document.getElementById("edad").value;
  var ocupacion = document.getElementById("profesion").value;
  var telefono = document.getElementById("tel").value;

  var usuario = {
    name: nombre,
    mail: correo,
    direccion: direccion,
    age: edad,
    occupation: ocupacion,
    tel: telefono,
  };

  console.log(usuario);

  return false;
}
