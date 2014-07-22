var websocket;
conectar = (function() {
    websocket = new WebSocket("ws://192.168.0.110:8080/Servidor/echo/" + $("#player").val());
//    websocket = new WebSocket("ws://10.100.0.48:8081/Servidor/echo/" + $("#player").val());
    mensagemInfo("Tentando se Conectar.", "Informação");
    websocket.onmessage = (function(evt) {
        escrever(evt.data);
    });
    websocket.onerror = (function(evt) {
        mensagemErro("Erro ao tentar se conectar.", "Erro");
    });
    websocket.onopen = (function() {
        mensagemInfo("Conectado.", "Informação");
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
    if (acao == 'conversa') {
        recebeMensagem(par, obj);
    }
});

recebeMensagem = (function(rem, mens) {
    $("#mensagens").val(rem + " disse: " + mens + "\r\n" + $("#mensagens").val());
});

conversar = (function() {
    var men = $("#men_envia").val();
    var acao = "conversa";
    var par = $("#oponente").val();
    var mens = acao + "|" + par + "|" + men;
    websocket.send(mens);
    $("#mensagens").val("você disse: " + men + "\r\n" + $("#mensagens").val());
    $("#men_envia").val("");
});

colocaCartaTabuleiroOp = (function(obj, tab) {
    $("#" + tab).append("<div class='card col-lg-2'>" + obj + "</div>");
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
