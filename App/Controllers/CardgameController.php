<?php

namespace App\Controllers;

/**
 * Description of CardGameController
 *
 * @author gilmario
 * @identificado
 */
class CardgameController extends \jaspion\Controllers\Controller {

    public function indexAction() {
        $this->render("index");
    }

    public function registroAction() {
        if (isset($_POST['nome'])) {
            $_SESSION['nome'] = $_POST['nome'];
            $this->addScript("card");
            $this->addScript("init");
            $this->mensagem("Bemvindo");
            $this->render("game");
        } else {
            $this->mensagem("Você não está identificado");
            $this->render("index");
        }
    }

}
