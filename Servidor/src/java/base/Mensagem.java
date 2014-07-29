/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package base;

import java.io.StringReader;
import javax.json.Json;
import javax.json.JsonObject;

/**
 *
 * @author gilmario
 */
public class Mensagem {

    private String acao;
    private String parametro;
    private String mensagem;

    public Mensagem() {

    }

    public Mensagem(String acao, String parametro, String mensagem) {
        this.acao = acao;
        this.parametro = parametro;
        this.mensagem = mensagem;
    }

    public String getAcao() {
        return acao;
    }

    public void setAcao(String acao) {
        this.acao = acao;
    }

    public String getParametro() {
        return parametro;
    }

    public void setParametro(String parametro) {
        this.parametro = parametro;
    }

    public String getMensagem() {
        return mensagem;
    }

    public void setMensagem(String mensagem) {
        this.mensagem = mensagem;
    }

    public static String jsonToObject(Mensagem m) {
        return Json.createObjectBuilder().add("acao", m.getAcao()).add("parametro", m.getParametro()).add("mensagem", m.getMensagem()).build().toString();
    }

    public static Mensagem objectToJson(String json) {
        JsonObject o = Json.createReader(new StringReader(json)).readObject();
        return new Mensagem(o.getString("acao"), o.getString("parametro"), o.getString("mensagem"));
    }

}
