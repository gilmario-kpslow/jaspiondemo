criaObjeto = (function(obj) {
    obj = JSON.parse(obj);
    return new MensagemClasse(obj.acao, obj.parametro, obj.mensagem);
});

MensagemClasse = function(a, p, m) {
    this.acao = a;
    this.parametro = p;
    this.mensagem = m;

    this.setAcao = function(ac) {
        this.acao = ac;
    };

    this.setParametro = function(pa) {
        this.parametro = pa;
    };

    this.setMensagem = function(men) {
        this.mensagem = men;
    };

    this.getAcao = function() {
        return this.acao;
    };

    this.getParametro = function() {
        return this.parametro;
    };

    this.getMensagem = function() {
        return this.mensagem;
    };
};

var websocket;
conectar = (function() {
    websocket = new WebSocket("ws://localhost:8080/Servidor/echo/" + $("#player").val());
//    websocket = new WebSocket("ws://10.100.0.48:8081/Servidor/echo/" + $("#player").val());
    mensagemInfo("Tentando se Conectar.", "Informação");
    websocket.onmessage = (function(evt) {
        escrever(criaObjeto(evt.data));
    });

    websocket.onerror = (function(evt) {
        mensagemErro("Erro ao tentar se conectar.", "Erro");
    });

    websocket.onopen = (function() {
        mensagemInfo("Conectado.", "Informação");
        $("#btnacao").attr("onclick", "opcoes();");
        $("#btnacao").html("Selecionar Adversário");
        $("#btnacao").addClass("btn-info");
        $("#btnacao").removeClass("btn-danger");
    });
});

enviaMensagem = (function(message) {
    var resp = JSON.stringify(message);
    websocket.send(resp);
});

escrever = (function(m) {
    if (m.getAcao() == 'jogadores') {
        criaPainelConectados(m.getMensagem());
    }
    if (m.getAcao() == 'addCarta') {
        colocaCartaTabuleiroOp(m.getMensagem(), "taboponente")
    }
    if (m.getAcao() == 'conversa') {
        recebeMensagem(m.getParametro(), m.getMensagem());
    }
});

recebeMensagem = (function(rem, mens) {
    $("#mensagens").append('<div align="right">' + rem + " disse: " + mens + "</div>");
    $("#mensagens").scrollTop($("#mensagens").children("div").length * 20);
});

conversar = (function() {
    var men = $("#men_envia").val();
    var acao = "conversa";
    var par = $("#oponente").val();
    var m = new MensagemClasse(acao, par, men);
    enviaMensagem(m);
    $("#mensagens").append('<div align="left" > você disse: ' + men + '</div>');
    $("#men_envia").val("");
    $("#mensagens").scrollTop($("#mensagens").children("div").length * 20);

});

colocaCartaTabuleiroOp = (function(obj, tab) {
    $("#" + tab).append("<div class='card col-lg-2'>" + obj + "</div>");
});

criaPainelConectados = (function(mensagem) {
    var users = new String(mensagem).split("-");
    $("#conectados").html("");
    for (var i = 0; i < users.length; i++) {
        if (users[i] != $("#player").val()) {
            $("#conectados").append('<button class="btn btn-default  form-control" onclick="selecionaAdversario(\'' + users[i] + '\');">' + users[i] + '</button>');
        }
    }
});

