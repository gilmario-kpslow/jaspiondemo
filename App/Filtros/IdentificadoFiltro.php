<?php

namespace App\Filtros;

use jaspion\Interfaces\Filtro\Filtro;

/**
 * Description of IdentificadoFiltro
 *
 * @author gilmario
 */
class IdentificadoFiltro implements Filtro {

    public function erro($controlle = null, $acao = null, $parametro = null) {
        $c = new \App\Controllers\CardgameController();
        $c->mensagem("Você não está logado.");
        $c->indexAction();
    }

    public function filtrar($controlle = null, $acao = null, $parametro = null) {
        return isset($_SESSION['player']);
    }

}
