'use strict'
$(document).ready(function(){
  //Slider
  if(window.location.href.indexOf('index') > -1){
    $('.galeria').bxSlider({
      mode: 'fade',
      captions: true,
      slideWidth: 1200,
      responsive: true
    });
  }; 
  

  //Posts
  if(window.location.href.indexOf('index') > -1){
    var posts = [
      {
        title: 'Prueba de título 1',
        date: 'Fecha de publicación: '+moment().format('LLLL'),
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quaerat deserunt inventore praesentium culpa harum eaque? Corrupti nemo architecto cum porro ipsum possimus, error, vel, inventore libero earum quibusdam odio. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita voluptates, quasi aliquid aliquam omnis cupiditate. Earum temporibus illum pariatur, nulla distinctio sint repudiandae recusandae, alias eos possimus facere, impedit incidunt?'
      },
      {
        title: 'Prueba de título 2',
        date: 'Fecha de publicación: '+moment().format('LLLL'),
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quaerat deserunt inventore praesentium culpa harum eaque? Corrupti nemo architecto cum porro ipsum possimus, error, vel, inventore libero earum quibusdam odio. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita voluptates, quasi aliquid aliquam omnis cupiditate. Earum temporibus illum pariatur, nulla distinctio sint repudiandae recusandae, alias eos possimus facere, impedit incidunt?'
      },
      {
        title: 'Prueba de título 3',
        date: 'Fecha de publicación: '+moment().format('LLLL'),
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quaerat deserunt inventore praesentium culpa harum eaque? Corrupti nemo architecto cum porro ipsum possimus, error, vel, inventore libero earum quibusdam odio. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita voluptates, quasi aliquid aliquam omnis cupiditate. Earum temporibus illum pariatur, nulla distinctio sint repudiandae recusandae, alias eos possimus facere, impedit incidunt?'
      },
      {
        title: 'Prueba de título 4',
        date: 'Fecha de publicación: '+moment().format('LLLL'),
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quaerat deserunt inventore praesentium culpa harum eaque? Corrupti nemo architecto cum porro ipsum possimus, error, vel, inventore libero earum quibusdam odio. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita voluptates, quasi aliquid aliquam omnis cupiditate. Earum temporibus illum pariatur, nulla distinctio sint repudiandae recusandae, alias eos possimus facere, impedit incidunt?'
      },
      {
        title: 'Prueba de título 5',
        date: 'Fecha de publicación: '+moment().format('LLLL'),
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quaerat deserunt inventore praesentium culpa harum eaque? Corrupti nemo architecto cum porro ipsum possimus, error, vel, inventore libero earum quibusdam odio. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita voluptates, quasi aliquid aliquam omnis cupiditate. Earum temporibus illum pariatur, nulla distinctio sint repudiandae recusandae, alias eos possimus facere, impedit incidunt?'
      },
      {
        title: 'Prueba de título 6',
        date: 'Fecha de publicación: '+moment().format('LLLL'),
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quaerat deserunt inventore praesentium culpa harum eaque? Corrupti nemo architecto cum porro ipsum possimus, error, vel, inventore libero earum quibusdam odio. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita voluptates, quasi aliquid aliquam omnis cupiditate. Earum temporibus illum pariatur, nulla distinctio sint repudiandae recusandae, alias eos possimus facere, impedit incidunt?'
      },
    ];
    posts.forEach((item, index) =>{
      var post = `
      <article class="post">
                          <h2>${item.title}</h2>
                          <span class="date">${item.date}</span>
                          <p>
                              ${item.content}
                          </p>
                          <a href="#" class="button-more">Leer más...</a>
                      </article>
      `;
      
      $("#posts").append(post);
    });
  };

  

  //theme-selector
  var theme = $("#theme");
  $("#to-green").click(function(){
    theme.attr("href", "css/green.css");
  });
  $("#to-red").click(function(){
    theme.attr("href", "css/red.css");
  });
  $("#to-blue").click(function(){
    theme.attr("href", "css/blue.css");
  });

  //Scroll arriba de la web
  $('.subir').click(function(e){
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 500);
    return false;
  });

  //Login falso
  $("#login form").submit(function(){
    var form_name = $("#form_name").val();

    localStorage.setItem("form_name", form_name);
  });

  var form_name = localStorage.getItem("form_name");

  if(form_name != null && form_name != "undefined"){
    var about_parrafo = $("#about p");

    about_parrafo.html("<br><strong>Bienvenido, "+form_name+"</strong>");
    about_parrafo.append(" <a href='#' id='logout'>Cerrar sesión</a>");
    $("#login login").hide();

    $("#logout").click(function(){
      localStorage.clear();
      location.reload();
    });
  }
  //Acordeon
  if(window.location.href.indexOf('about') > -1){
    $("#acordeon").accordion();
  }
  //Reloj
  if(window.location.href.indexOf('reloj') > -1){
    setInterval(function(){
      var reloj = moment().format("hh:mm:ss");
      $("#reloj").html(reloj);
    }, 1000);
  }
  //Validación de formulario
  if(window.location.href.indexOf('contact') > -1){
    $("form input[name = 'birthday']").datepicker({
      dateFormat: 'dd-mm-yy'
    });
    $.validate({
      lang: 'es',
      errorMessagePosition: 'top',
      scrollToTopOnError: true

    });
  }
});