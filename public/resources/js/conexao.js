var websocket;
conectar = (function() {
    websocket = new WebSocket("ws://10.100.0.48:8081/Servidor/echo/" + $("#player").val());
    websocket.onmessage = (function(evt) {
        escrever(evt.data);
    });
});

enviaMenssagem = (function(message) {
    websocket.send(message);
});

escrever = (function(message) {
    var res = new String(message).split("|");
    var acao = res[0];
    var par = res[1];
    var obj = res[2];
    if (acao == 'jogadores') {
        criaPainelConectados(obj);
    }
    if (acao == 'addCarta') {
        colocaCartaTabuleiroOp(obj, "taboponente")
    }

//    if (new String(message).split("|").length > 0) {
//        criaPainelConectados(message);
//    } else {
//        $("#mensagens").append(message + "<br/>");
//    }
});

colocaCartaTabuleiroOp = (function(obj, tab) {
    $("#" + tab).append("<div class='card col-lg-2'>" + obj + "</div>");
//    obj.unbind("click");
//    obj.bind('click', function() {
//        removeCartaTabuleiro(obj);
//    });
});

criaPainelConectados = (function(mensagem) {
    var users = new String(mensagem).split("-");
    $("#conectados").html("");
    for (var i = 0; i < users.length; i++) {
        if (users[i] != $("#player").val()) {
            $("#conectados").append('<button class="btn btn-default  form-control" onclick="iniciar(\'' + users[i] + '\');">' + users[i] + '</button>');
        }
    }
});
