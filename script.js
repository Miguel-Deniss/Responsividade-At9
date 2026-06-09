$(document).ready(function () {

  $("#toggleConteudo").click(function () {
    $("#conteudoExtra").slideToggle();
  });

  $("#modoEscuro").click(function () {

    $("body").toggleClass("dark-mode");

    if ($("body").hasClass("dark-mode")) {
      $(this).html("☀️");
    } else {
      $(this).html("🌙");
    }

  });

});

$(document).ready(function () {

  $("#toggleConteudo").click(function () {
    $("#conteudoExtra").slideToggle();
  });

  $("#modoEscuro").click(function () {
    $("body").toggleClass("dark-mode");
  });

  // Contador automático de cursos
  let totalCursos = $("#cursos .card").length;
  $("#contadorCursos").text(totalCursos);

});

$(document).ready(function () {

  $("#toggleConteudo").click(function () {
    $("#conteudoExtra").slideToggle();
  });

  $("#modoEscuro").click(function () {
    $("body").toggleClass("dark-mode");
  });

  // Contador automático
  let totalCursos = $("#cursos .curso-card").length;
  $("#contadorCursos").text(totalCursos);

  // Pesquisa de cursos
  $("#pesquisaCurso").keyup(function () {

    let texto = $(this).val().toLowerCase();

    $(".curso-card").each(function () {

      let titulo = $(this).find("h5").text().toLowerCase();

      if (titulo.includes(texto)) {
        $(this).parent().show();
      } else {
        $(this).parent().hide();
      }

    });

  });

});