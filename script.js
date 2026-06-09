$(document).ready(function(){

  $("#toggleConteudo").click(function(){

      $("#conteudoExtra").slideToggle();

  });

  $("#modoEscuro").click(function(){

      $("body").toggleClass("dark-mode");

  });

});