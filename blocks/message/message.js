import template from './message.pug';

export class Message {

    constructor(el, data) {
        this.el = el;
        this.data = data;
        this.render();

     }

    render() {
        const authenticated = localStorage.getItem('authenticated');
        this.el.innerHTML = template({ authenticated });

        let form = this.el.querySelector('.message');

        form.addEventListener('submit', event => {
            event.preventDefault();
            this.sendMessage();
            console.log('send');
        });

        form.addEventListener('keydown', event => {
            if ((event.metaKey || event.ctrlKey) && event.keyCode === 13) {
                event.preventDefault();
                this.sendMessage();
                console.log('send');
            }
            else if (!event.ctrlKey && event.keyCode === 13) {
                event.preventDefault();
            }
        });
    }

    sendMessage() {
        const input = this.el.querySelector('.message__input');
        window.chat.insertMessage(input.value);
        input.value = '';
    }

}


