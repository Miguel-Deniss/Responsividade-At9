$(document).ready(function () {

  // Mostrar/Ocultar conteúdo
  $("#toggleConteudo").click(function () {
    $("#conteudoExtra").slideToggle();
  });

  // Modo escuro
  $("#modoEscuro").click(function () {

    $("body").toggleClass("dark-mode");

    if ($("body").hasClass("dark-mode")) {
      $(this).html('<i class="bi bi-sun"></i>');
    } else {
      $(this).html('<i class="bi bi-moon"></i>');
    }

  });

  // Contador automático de cursos
  let totalCursos = $(".curso-card").length;
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

  // Formulário de contato
  $("form").submit(function (e) {

    e.preventDefault();

    $("#mensagemSucesso").html(`
    <div class="alert alert-success">
      ✅ Obrigado por entrar em contato! Em breve responderemos sua mensagem.
    </div>
  `);

    this.reset();

    setTimeout(function () {
      $("#mensagemSucesso").fadeOut();
    }, 3000);

  });

});

// Mostrar botão ao rolar página
$(window).scroll(function () {

  if ($(this).scrollTop() > 300) {
    $("#btnTopo").fadeIn();
  } else {
    $("#btnTopo").fadeOut();
  }

});

// Voltar ao topo
$("#btnTopo").click(function () {

  $("html, body").animate({
    scrollTop: 0
  }, 600);

});