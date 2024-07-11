import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import SockJS from 'sockjs-client';
import { Client } from '@stomp/stompjs';

@Injectable({
  providedIn: 'root',
})
export class WebSocketService {
  private stompClient: Client;
  private documentSubject = new Subject<any>();

  documentUpdates$ = this.documentSubject.asObservable();

  constructor() {
    this.stompClient = new Client({
      brokerURL: 'ws://localhost:8080/websocket', // Your WebSocket URL
      connectHeaders: {
        login: 'user',
        passcode: 'password',
      },
      debug: function (str) {
        console.log(str);
      },
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
      webSocketFactory: () => new SockJS('http://localhost:8080/ws') as WebSocket
    });

    this.stompClient.onConnect = (frame) => {
      console.log('Connected: ' + frame);
      this.stompClient.subscribe('/topic/document', (message) => {
        this.documentSubject.next(JSON.parse(message.body));
      });
    };

    this.stompClient.onStompError = (frame) => {
      console.error('Broker reported error: ' + frame.headers['message']);
      console.error('Additional details: ' + frame.body);
    };

    this.stompClient.activate();
  }

  sendDocument(document: any) {
    if (this.stompClient.active) {
      this.stompClient.publish({
        destination: '/app/document.edit',
        body: JSON.stringify(document),
      });
    } else {
      console.error('STOMP client is not connected.');
    }
  }
}
