<?php

namespace App\Filtros;

/**
 * Description of UsuarioFiltro
 *
 * @author gilmario
 */
class PrimeiroAcessoFiltro implements \jaspion\Interfaces\Filtro\Filtro {

    public function erro($controlle = null, $acao = null, $parametro = null) {
        echo 'ERRO DE FILTRO';
    }

    public function filtrar($controlle = null, $acao = null, $parametro = null) {
        echo 'ERRO';
    }

}
