$(document).ready(function() {

});

colocarCartaMao = (function(nome, desc, tipo, valor, tipomana) {
    var c = $('<div class="card col-lg-2 card-fechada" nome="' + nome + '" descricao="' + desc + '" posicao="oculta" tipo="' + tipo + '" valor=' + valor + ' tipomana="' + tipomana + '" situacao="maojogador"></div>');
    $("#cartas").append(c);
    c.on('mouseover', function() {
        mostrarCarta(c);
    });
    c.on('mouseout', function() {
        escoderCarta(c);
    });
});

opcoes = (function() {
    $("#adversarios").modal("show");
});

iniciar = (function(d) {
    criarMao();
    $("#btnacao").hide();
});

criaBaralho = (function() {
    $("#baralho").html('<div class="baralho" onclick="novaCarta();">Baralho do GIL</div>');
});

criarMao = (function() {
    criarMaoJogador();
    criaBaralho();
});

criarMaoJogador = (function() {
    colocarCartaMao("Carta 01", '', "terreno", "5", 'fogo');
    colocarCartaMao("Carta 02", '', "terreno", "10", 'agua');
    colocarCartaMao("Carta 03", '', "terreno", "15", 'incolor');
    colocarCartaMao("Carta 04", '', "terreno", "20", 'pantano');
    colocarCartaMao("Carta 05", '', "terreno", "25", 'floresta');
    colocarCartaMao("Carta 06", '', "terreno", "30", 'planicie');
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

ativaCartas = (function() {
//    $("#cartas")
//    var cartas = $("#loca").children()
//    if (carta.attr('situacao') == 'maojogador') {
//        carta.unbind("click");
//        carta.bind('click', function() {
//            colocaCartaTabuleiro(carta, 'tabplayer');
//        });
//    }
});

novaCarta = (function() {
    colocarCartaMao("Carta do baralho", "Nome qualquer");
});



