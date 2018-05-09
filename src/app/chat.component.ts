import { Component } from '@angular/core';
import io from 'socket.io-client';

@Component({
    selector: 'app-chat',
    template: `
        <div>
            <br>
            <div class="form-inline">
                <input
                  class="form-control"
                  placeholder="Enter your message"
                  [(ngModel)]="message"
                >
                <button class="btn btn-success" (click)="send();">Send</button>
            </div>
        </div>
    `
})

export class ChatComponent {
    socket: any;
    constructor() {
        this.socket = io.connect('https://socket1901.herokuapp.com/');
        this.socket.on('SERVER_SEND_MESSAGE', data => alert(data));
    }
    message = '';

    send() {
        this.socket.emit('CLIENT_SEND_MESSAGE', this.message);
        this.message = '';
    }
}
