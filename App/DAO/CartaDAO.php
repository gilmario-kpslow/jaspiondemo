<?php

namespace App\DAO;

use jaspion\DAO\DAO;
use App\Models\Carta;

/**
 * Description of CartaDAO
 *
 * @author gilmario
 */
class CartaDAO extends DAO {

    public function __construct() {
        parent::__construct('game', new Carta(), "carta");
    }

}
