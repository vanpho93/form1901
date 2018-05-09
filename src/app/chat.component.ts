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
            <div *ngFor="let m of messages">
                <div class="text-info">{{ m }}</div>
            </div>
        </div>
    `
})

export class ChatComponent {
    socket: any;
    message = '';
    messages = [];

    constructor() {
        this.socket = io.connect('https://socket1901.herokuapp.com/');
        this.socket.on('SERVER_SEND_MESSAGE', data => this.messages.push(data));
    }

    send() {
        this.socket.emit('CLIENT_SEND_MESSAGE', this.message);
        this.message = '';
    }
}
