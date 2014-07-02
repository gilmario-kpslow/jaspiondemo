<?php

namespace App\Filtros;

/**
 * Description of UsuarioFiltro
 *
 * @author gilmario
 */
class UsuarioFiltro implements \jaspion\Interfaces\Filtro\Filtro {

    public function erro($controlle = null, $acao = null, $parametro = null) {
        $i = new \App\Controllers\IndexController();
        $i->erro500();
    }

    public function filtrar($controlle = null, $acao = null, $parametro = null) {
        return null;
    }

}
