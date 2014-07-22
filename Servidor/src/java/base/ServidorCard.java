/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package base;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.websocket.CloseReason;
import javax.websocket.EndpointConfig;
import javax.websocket.OnClose;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.PathParam;
import javax.websocket.server.ServerEndpoint;

/**
 *
 * @author gilmario
 */
@ServerEndpoint("/echo/{player}")
public class ServidorCard {

    private static final Map<String, Session> jogadores = new HashMap<>();

    @OnMessage
    public void onMessage(Session session, String msg) {
        try {
            String[] recebido = msg.split("\\|");
            String acao = recebido[0];
            String parametro = recebido[1];
            String obj = recebido[2];
            if (acao.equals("addCarta")) {
                adicionaCarta(parametro, obj);
            }
            if (acao.equals("conversa")) {
                conversasao(parametro, getJogador(session), obj);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @OnOpen
    public void onOpen(Session session, EndpointConfig config, @PathParam("player") String player) {
        jogadores.put(player, session);
        for (Session sess : session.getOpenSessions()) {
            if (sess.isOpen()) {
                try {
                    String j = listaJogadores();
                    sess.getBasicRemote().sendText("jogadores" + "|" + "" + "|" + j);
                } catch (IOException ex) {
                    Logger.getLogger(ServidorCard.class.getName()).log(Level.SEVERE, null, ex);
                }
            }
        }
    }

    @OnClose
    public void onClose(Session session, CloseReason closeReason) {
        jogadores.clear();
    }

    private String listaJogadores() {
        String nomeJoga = "";
        for (Map.Entry<String, Session> entry : jogadores.entrySet()) {
            String player = entry.getKey();
            nomeJoga += "-" + player;
        }
        return nomeJoga.replaceFirst("\\-", "");
    }

    private String getJogador(Session s) {
        for (Map.Entry<String, Session> entry : jogadores.entrySet()) {
            String player = entry.getKey();
            Session session = entry.getValue();
            if (session.equals(s)) {
                return player;
            }
        }
        return null;
    }

    private void adicionaCarta(String parametro, String obj) throws IOException {
        Session s = jogadores.get(parametro);
        s.getBasicRemote().sendText("addCarta" + "|" + parametro + "|" + obj);
    }

    private void conversasao(String parametro, String remetente, String obj) throws IOException {
        if (parametro.equals("todos")) {
            for (Map.Entry<String, Session> entry : jogadores.entrySet()) {
                Session session = entry.getValue();
                session.getBasicRemote().sendText("conversa" + "|" + "" + "|" + obj);
            }
        } else {
            Session s = jogadores.get(parametro);
            s.getBasicRemote().sendText("conversa" + "|" + remetente + "|" + obj);
        }

    }
}
