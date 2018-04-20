import {Message} from '../message/message';
import template from './chat.pug';

export class Chat {

    constructor(el, data) {
        this.el = el;
        this.data = data;
        this.render();

    }

    render(text = '') {
        const authenticated = localStorage.getItem('authenticated');
        const user = localStorage.getItem('user');
        this.el.innerHTML += template({
            authenticated,
            user,
            text
        });
    }

    insertMessage(text) {
        this.render(text)
    }

}

