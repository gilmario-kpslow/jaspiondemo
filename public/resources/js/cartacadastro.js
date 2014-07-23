cadastrarCarta = (function() {
    $.ajax({
        url: $("#frmCriar").attr('action'),
        type: 'POST',
        data: $("#frmCriar").serialize()
    }).success(function(ret) {
        if (ret == 'OK') {
            mensagemInfo("Carta cadastrada.", "Informaçao");
            limpaFormulario();
        } else {
            mensagemErro("Nao foi possivel cadastrar a carta." + ret, 'Erro');
        }
    });
});

listarCarta = (function() {
    $.ajax({
        url: $("#frmListar").attr('action'),
        type: 'POST',
        data: $("#frmListar").serialize()
    }).success(function(ret) {
        if (ret != 'ERROR') {
            montarTabelaCarta(ret);
        } else {
            mensagemErro("Erro na consulta." + ret, 'Erro');
        }
    });
});

montarTabelaCarta = (function(dados) {
    var cartas = JSON.parse(dados);
    var tabela = $("#frmListar tbody");
    tabela.html("");
    $.each(cartas.lista, function(i, obj) {
        tabela.append("<tr><td>" + obj.nome + "</td><td>" + obj.ataque + "</td><td>" + obj.defesa + "</td></tr>");
    });
});

abreFormulario = (function(form) {
    $("#" + form).modal('show');
});
fechaFormulario = (function(form) {
    $("#" + form).modal('hide');
});

limpaFormulario = (function() {
    var inputs = $("#frmCriar input");
    $.each(inputs, function(i, o) {
        $(o).val("");
    });
    var textareas = $("#frmCriar textarea");
    $.each(textareas, function(i, o) {
        $(o).val("");
    });
});

