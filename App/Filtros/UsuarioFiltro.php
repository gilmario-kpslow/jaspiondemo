<?php

namespace App\Filtros;

/**
 * Description of UsuarioFiltro
 *
 * @author gilmario
 */
class UsuarioFiltro implements \jaspion\Interfaces\Filtro\Filtro {

    public function erro($controlle = null, $acao = null, $parametro = null) {
        echo 'ERRO AO FILTRAR';
    }

    public function filtrar($controlle = null, $acao = null, $parametro = null) {
        echo 'ERRO AO FILTRAR';
    }

}
