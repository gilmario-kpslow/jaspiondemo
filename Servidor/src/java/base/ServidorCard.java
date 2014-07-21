/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package base;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.websocket.CloseReason;
import javax.websocket.Endpoint;
import javax.websocket.EndpointConfig;
import javax.websocket.MessageHandler;
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

//            for (Session sess : session.getOpenSessions()) {
//                if (sess.isOpen()) {
//                    sess.getBasicRemote().sendText(msg);
//                }
//            }
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

//
//
//    public void onError(Session session, Throwable thr) {
//
//    }
    private void adicionaCarta(String parametro, String obj) throws IOException {
        Session s = jogadores.get(parametro);
        s.getBasicRemote().sendText("addCarta" + "|" + parametro + "|" + obj);
    }
}
