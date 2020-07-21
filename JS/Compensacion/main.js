$(".toggle").click(function () {
  $(".formulario").animate(
    {
      height: "toggle",
      "padding-top": "toggle",
      "padding-bottom": "toggle",
      opacity: "toggle",
    },
    "slow"
  );
});

function validateform() {
  var name = document.myform.name.value;
  var password = document.myform.password.value;
  var decimal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{10,20}$/;

  if (name != "" || password != "") {
    if (password.match(decimal)) {
      alert("Correcto");
      return true;
    } else {
      alert(
        "La contaseña debe tener de 10 a 20 carácteres, también debe tener mayúsculas, minúsculas, números y signos especiales."
      );
      return false;
    }
  } else {
    alert("Todos los campos son obligatorios .....!");
  }
}
