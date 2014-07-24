escoderCarta = (function(carta) {
    carta.html("");
    carta.attr('posicao', 'oculta');
    carta.removeClass('card-virada');
});

mostrarCarta = (function(carta) {
    if (carta.attr('posicao') == 'oculta') {
        carta.attr('posicao', 'virada');
        carta.addClass('card-virada');
        carta.append("<div class='card-nome'><span >" + carta.attr('nome'));
        carta.append('<ul class="nav nav-tabs" role="tablist"><li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#">Dropdown <span class="caret"></span></a><ul class="dropdown-menu" role="menu"></ul><li>set</li></li></ul>');
        carta.append("<div class='card-conteudo'>" + carta.attr('descricao'));
    }
});
