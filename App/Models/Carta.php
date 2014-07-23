<?php

namespace App\Models;

use jaspion\Models\Model;

/**
 * Classe Carta -
 *
 * @author gilmario
 */
class Carta extends Model {

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
     * @formName=descricao
     * @columnDb=descricao
     */
    protected $descricao;

    /**
     *
     * @formName=ataque
     * @columnDb=ataque
     *
     */
    protected $ataque;

    /**
     *
     * @formName=defesa
     * @columnDb=defesa
     */
    protected $defesa;

    public function getId() {
        return $this->id;
    }

    public function getNome() {
        return $this->nome;
    }

    public function getDescricao() {
        return $this->descricao;
    }

    public function getAtaque() {
        return $this->ataque;
    }

    public function getDefesa() {
        return $this->defesa;
    }

    public function setId($id) {
        $this->id = intval($id);
    }

    public function setNome($nome) {
        $this->nome = $nome;
    }

    public function setDescricao($descricao) {
        $this->descricao = $descricao;
    }

    public function setAtaque($ataque) {
        $this->ataque = intval($ataque);
    }

    public function setDefesa($defesa) {
        $this->defesa = intval($defesa);
    }

}
