function mostrarNombres(data, status){
    console.log(data);
    let nombres = data.map( user => `<li>${user.name}</li>`);
    $("#users").html(nombres);
}

const url = 'https://jsonplaceholder.typicode.com/users';

function llamarApi(){
    console.log("Antes")
    $.get("https://jsonplaceholder.typicode.com/users", mostrarNombres);
    console.log("Despues")

}
$.ajax(settings).done(function (response) {
    console.log(response);
});

$.ajax(settings).done(function (response) {
    console.log(response);
    let velocidad = response.wind.speed;
    $("#users").html(`<li>El viento tienen una velocidado de ${velocidad}</li>`)
});



('#contact-form').submit(function(event) {
    var form = $(this);
    if (form[0].checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      form.addClass('was-validated');
    }
  });
  validate.validators.email = function(value, options, key, attributes) {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      return options.message || 'debe ser una dirección de correo electrónico válida';
    }
  };
  
