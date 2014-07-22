
$(document).ready(function() {

});

mensagemInfo = (function(men, titulo) {
    criaMensagem(men, "bg-info", titulo);
});
mensagemSuccesso = (function(men, titulo) {
    criaMensagem(men, "bg-success", titulo);
});
mensagemErro = (function(men, titulo) {
    criaMensagem(men, "bg-danger", titulo);
});

mensagemAlerta = (function(men, titulo) {
    criaMensagem(men, "bg-warning", titulo);
});

criaMensagem = (function(mensagem, tipo, titulo) {
    $("#titulo_men").html(titulo);
    $("#informacao_men").html(mensagem);
    $("#tipo_men").attr("class", "");
    $("#tipo_men").addClass("modal-header");
    $("#tipo_men").addClass(tipo);
    $(".modal_info").modal("show");
});