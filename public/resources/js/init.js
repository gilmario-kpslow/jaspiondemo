var output = $("#resp");
websocket = new WebSocket("ws://10.100.0.48:8081/Servidor/echo");

function send_echo() {
    websocket.open();
//    websocket.onopen = function(evt) {
//        onOpen(evt)
//    };
    websocket.onmessage = function(evt) {
        onMessage(evt)
    };
    websocket.onerror = function(evt) {
        onError(evt)
    };

}

function onOpen(evt) {
//    writeToScreen("CONNECTED");
    doSend($("#send").val());
}

function onMessage(evt) {
    writeToScreen("RECEIVED: " + evt.data);
}

function onError(evt) {
    writeToScreen('<span style="color: red;">ERROR:</span> ' + evt.data);
}

function doSend(message) {
    websocket.send(message);
}

function writeToScreen(message) {
    output.append("<p>" + message + "</p>");
}

$(document).ready(function() {
    criarMao();
});

criarMao = (function() {
    criarMaoJogador();
});
criarMaoJogador = (function() {
    var maoJogador = $("#maojogador div");
    maoJogador.append("<div id='card1' class='card col-lg-2'>")
            .append("<div id='card2' class='card col-lg-2'>")
            .append("<div id='card3' class='card col-lg-2'>")
            .append("<div id='card4' class='card col-lg-2'>")
            .append("<div id='card5' class='card col-lg-2'>")
            .append("<div id='card6' class='card col-lg-2'>");

    maoJogador.children().each(function(i, obj) {
        $(obj).card({"nome": "Carta 01", descricao: "Faz alguma coisa"});
    });
//    var c1 = $("#card1").card({"nome": "Carta 01", descricao: "Faz alguma coisa"});
//    var c2 = $("#card2").card({"nome": "Carta 02", descricao: "Faz alguma coisa"});
//    var c3 = $("#card3").card({"nome": "Carta 03", descricao: "Faz alguma coisa"});


});
criarAdversario = (function() {

});
