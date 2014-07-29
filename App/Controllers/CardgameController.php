<?php

namespace App\Controllers;

/**
 * Description of CardGameController
 *
 * @author gilmario
 *
 */
class CardgameController extends \jaspion\Controllers\Controller {

    public function indexAction() {
        $this->render("index");
    }

    public function registroAction() {
        if (isset($_POST['player'])) {
            $_SESSION['player'] = $_POST['player'];
//            \HttpRequest::redirect($this->link("\cardgame\game"));
            $this->gameAction();
            ;
        } else {
            $this->mensagem("Você não está identificado");
            $this->render("index");
        }
    }

    /**
     * @identificado
     */
    public function gameAction() {
        $this->addScript("card");
        $this->addScript("conexao");
        $this->addScript("init");
        $this->mensagem("Bem vindo!!!");
        $this->render("game", "gamelayout");
    }

}
