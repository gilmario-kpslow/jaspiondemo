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
    maoJogador.append("<div class='card col-lg-2'>")
            .append("<div class='card col-lg-2'>")
            .append("<div class='card col-lg-2'>")
            .append("<div class='card col-lg-2'>")
            .append("<div class='card col-lg-2'>")
            .append("<div class='card col-lg-2'>");

    maoJogador.children().each(function(i, obj) {
        $(obj).card({"nome": "Carta 01", descricao: "Faz alguma coisa"});
        $(obj).click('click', function() {
            colocaCartaTabuleiro($(obj), "tabplayer");
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

colocaCartaTabuleiro = (function(obj, tab) {
    $("#" + tab).append(obj);
    obj.unbind("click");
    var m = new MensagemClasse("addCarta", $("#oponente").val(), obj.html());
    enviaMensagem(m);
    obj.bind('click', function() {
        removeCartaTabuleiro(obj);
    });
});

