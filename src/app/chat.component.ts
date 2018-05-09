import { Component } from '@angular/core';

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
                <button class="btn btn-success">Send</button>
            </div>
        </div>
    `
})

export class ChatComponent {
    message = '';
}
