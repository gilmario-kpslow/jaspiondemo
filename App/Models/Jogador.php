<?php

namespace App\Models;

use jaspion\Models\Model;

/**
 * Classe Jogador
 *
 * @author gilmario
 */
class Jogador extends Model {

    /**
     *
     * @formName=id
     * @columnDb=id
     *
     */
    protected $id;

    /**
     *
     * @formName=nome
     * @columnDb=nome
     */
    protected $nome;

    /**
     *
     * @formName=senha
     * @columnDb=senha
     */
    protected $senha;

    public function getId() {
        return $this->id;
    }

    public function setId($id) {
        $this->id = $id;
    }

    public function getNome() {
        return $this->nome;
    }

    public function getSenha() {
        return $this->senha;
    }

    public function setNome($nome) {
        $this->nome = $nome;
    }

    public function setSenha($senha) {
        $this->senha = $senha;
    }

}
