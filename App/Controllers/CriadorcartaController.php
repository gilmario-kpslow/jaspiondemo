<?php

namespace App\Controllers;

use jaspion\Controllers\Controller;
use App\Models\Carta;
use App\DAO\CartaDAO;
use jaspion\Util\JSonUtil;

/**
 * Description of CriadorCarta
 *
 * @author gilmario
 */
class CriadorcartaController extends Controller {

    private $dao;

    public function __construct() {
        parent::__construct();
        $this->dao = new CartaDAO();
    }

    public function indexAction() {
        $this->render("index");
    }

    public function criarAction() {
        $this->addScript("cartacadastro");
        $this->addScript("conexao");
        $this->render("criar");
    }

    public function cadastrarAction() {
        $carta = new Carta();
        $carta->popularForm($_POST);
        $c = $this->dao->salvar($carta);
        if ($c) {
            echo 'OK';
        } else {
            echo 'ERROR';
        }
    }

    public function listarAction() {
        $array = $this->dao->listar();
        echo JSonUtil::criaJSONObjectArray($array);
    }

    public function limparBancoAction() {
        $limpaCarta = "truncate carta;";
        $limpaJogador = "truncate jogador;";
        $db = \jaspion\DAO\Conexao::getDb("game");
        $db->exec($limpaCarta);
        $db->exec($limpaJogador);

        $this->mensagem("Banco limpo.");
        $this->render("index");
    }

    public function criarBancoAction() {
        $sqlTableCarta = "CREATE TABLE carta ( id integer not null auto_increment primary key,"
                . " nome varchar(20) not null unique,"
                . " descricao varchar(100),"
                . " ataque integer default 0,"
                . " defesa integer default 0"
                . ");";

        $sqlTableJogador = "CREATE TABLE jogador (id integer not null auto_increment primary key,"
                . " nome varchar(20) not null unique,"
                . " senha varchar(20) not null"
                . ");";
        $db = \jaspion\DAO\Conexao::getDb("game");

        $db->exec($sqlTableCarta);
        $db->exec($sqlTableJogador);

        $this->mensagem("Banco criado.");
        $this->render("index");
    }

}
