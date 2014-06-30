<?php

namespace App\Filtros;

/**
 * Description of UsuarioFiltro
 *
 * @author gilmario
 */
class UsuarioFiltro implements \jaspion\Interfaces\Filtro\Filtro {

    public function erro() {
        // Redenrizar o erro
        echo 'ERRO DE FILTRO';
    }

    public function filtrar() {
        return true;
    }

}
