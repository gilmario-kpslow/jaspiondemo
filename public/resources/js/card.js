escoderCarta = (function(carta) {
    carta.attr('posicao', 'oculta');
    carta.removeClass('card-virada');
    carta.html("");
});

mostrarCarta = (function(carta) {
    if (carta.attr('posicao') == 'oculta') {
        carta.attr('posicao', 'virada');
        carta.addClass('card-virada');
        carta.append('<div class="card-nome"><div class="btn-group"> <button type="button" class="btn btn-default dropdown-toggle btn-sm" data-toggle="dropdown"><span class="glyphicon glyphicon-align-justify"></span> </button>    <ul class="dropdown-menu small" role="menu">        <li class="small"><a href="#">Action</a></li>        <li class="small"><a href="#">Another action</a></li> <li class="small"><a href="#">Something else here</a></li></ul></div><span>' + carta.attr('nome') + '</span></div>');
        carta.append("<div class='card-conteudo'>" + carta.attr('descricao'));
    }
    if (carta.attr('situacao') == 'maojogador') {
        carta.unbind("click");
        carta.bind('click', function() {
            colocaCartaTabuleiro(carta, 'tabplayer');
        });
    }
});

desabilitar = (function(carta) {
    carta.removeClass('card-virada');
    carta.addClass('card-desativada');
});