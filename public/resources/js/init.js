$(document).ready(function() {

});

opcoes = (function() {
    $("#adversarios").modal("show");
});

iniciar = (function(d) {
    criarMao();
    $("#btnacao").hide();
});

criarMao = (function() {
    criarMaoJogador();
});

criarMaoJogador = (function() {
    var maoJogador = $("#cartas");
    maoJogador
            .append("<div class='card col-lg-2 card-fechada' nome='carta' descricao='carat 01' posicao='oculta' situacao='maojogador'>")
            .append("<div class='card col-lg-2 card-fechada' nome='carta' descricao='carat 01' posicao='oculta' situacao='maojogador'>")
            .append("<div class='card col-lg-2 card-fechada' nome='carta' descricao='carat 01' posicao='oculta' situacao='maojogador'>")
            .append("<div class='card col-lg-2 card-fechada' nome='carta' descricao='carat 01' posicao='oculta' situacao='maojogador'>")
            .append("<div class='card col-lg-2 card-fechada' nome='carta' descricao='carat 01' posicao='oculta' situacao='maojogador'>")
            .append("<div class='card col-lg-2 card-fechada' nome='carta' descricao='carat 01' posicao='oculta' situacao='maojogador'>");
    maoJogador.children().each(function(i, obj) {
        $(obj).on('mouseover', function() {
            mostrarCarta($(obj));
        });
        $(obj).on('mouseout', function() {
            escoderCarta($(obj));
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
    carta.unbind("mouseover");
    carta.unbind("mouseout");
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

selecionaAdversario = (function(adversario) {
    $("#oponente").val(adversario);
    $("#adversarios").modal("hide");
    $("#btnacao").attr("onclick", "iniciar();");
    $("#btnacao").html("Iniciar o jogo");
    $("#btnacao").addClass("btn-success");
    $("#btnacao").removeClass("btn-info");
});


