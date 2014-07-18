;
(function($) {

    var methods = {
        destroi: function() {
            return this;
        },
        init: function(conf) {
            conf = $.extend({nome: "nome", numero: "1", descricao: "desc"}, conf);
            var card = $(this);
            card.append("<div class='card-nome'><span >" + conf["nome"]);
            card.append("<div class='card-conteudo'>" + conf["descricao"]);
            return this.each(function() {
                function click(e) {
                    alert("click = " + card.attr("id"));
                }
                card.unbind('.card');
                card.bind('click.card', click);
            });
        }

    }
    $.fn.card = function(method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist on jQuery.card');
        }
    };

})(window.jQuery || window.Zepto);
