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
            Mensagem men = Mensagem.objectToJson(msg);
            if (men.getAcao().equals("addCarta")) {
                adicionaCarta(men.getParametro(), men.getMensagem());
            }
            if (men.getAcao().equals("conversa")) {
                conversasao(men.getParametro(), getJogador(session), men.getMensagem());
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
                    sess.getBasicRemote().sendText(Mensagem.jsonToObject(new Mensagem("jogadores", "", j)));
                } catch (IOException ex) {
                    Logger.getLogger(ServidorCard.class.getName()).log(Level.SEVERE, null, ex);
                }
            }
        }
    }

    @OnClose
    public void onClose(Session session, CloseReason closeReason) {
        jogadores.remove(getJogador(session));
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
        jogadores.get(parametro).getBasicRemote().sendText(Mensagem.jsonToObject(new Mensagem("addCarta", parametro, obj)));
    }

    private void conversasao(String parametro, String remetente, String obj) throws IOException {
        if (parametro.equals("todos")) {
            for (Map.Entry<String, Session> entry : jogadores.entrySet()) {
                Session session = entry.getValue();
                session.getBasicRemote().sendText(Mensagem.jsonToObject(new Mensagem("conversa", "", obj)));
            }
        } else {
            Session s = jogadores.get(parametro);
            s.getBasicRemote().sendText(Mensagem.jsonToObject(new Mensagem("conversa", remetente, obj)));
        }

    }
}
