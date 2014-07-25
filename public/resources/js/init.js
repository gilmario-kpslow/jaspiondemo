$(document).ready(function() {
    $("#iniciar").modal("show");
});

criarControles = (function() {
    $("#iniciar").modal("hide");
});

iniciar = (function(d) {
    $("#oponente").val(d);
    criarControles();
    criarMao();
});

criarMao = (function() {
    criarMaoJogador();
});

criarMaoJogador = (function() {
    var maoJogador = $("#maojogador div");
    maoJogador
            .append("<div class='card col-lg-2 card-fechada' nome='carta' descricao='carat 01' posicao='oculta' situacao='maojogador'>")
            .append("<div class='card col-lg-2 card-fechada' nome='carta' descricao='carat 01' posicao='oculta' situacao='maojogador'>")
            .append("<div class='card col-lg-2 card-fechada' nome='carta' descricao='carat 01' posicao='oculta' situacao='maojogador'>")
            .append("<div class='card col-lg-2 card-fechada' nome='carta' descricao='carat 01' posicao='oculta' situacao='maojogador'>")
            .append("<div class='card col-lg-2 card-fechada' nome='carta' descricao='carat 01' posicao='oculta' situacao='maojogador'>")
            .append("<div class='card col-lg-2 card-fechada' nome='carta' descricao='carat 01' posicao='oculta' situacao='maojogador'>");
    maoJogador.children().each(function(i, obj) {
        $(obj).click('click', function() {
            mostrarCarta($(obj));
        });
    });
});

removeCartaTabuleiro = (function(obj) {
    $("#cemiterio").append(obj);
    obj.unbind("click");
    obj.bind('click', function() {
        alert("hi");
    });
});

colocaCartaTabuleiro = (function(carta, tab) {
    $("#" + tab).append(carta);
    carta.unbind("click");
    carta.removeClass('card-virada');
    carta.addClass('card-virada-emcampo');
    var m = new MensagemClasse("addCarta", $("#oponente").val(), carta.html());
    enviaMensagem(m);
    carta.bind('click', function() {
        selecionaCarta(carta, "#tabplayer");
    });
});

selecionaCarta = (function(carta, local) {
    $(local).children().removeClass("selecionada");
    carta.addClass('selecionada');
});
