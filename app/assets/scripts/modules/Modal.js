import $ from 'jquery';

class Modal {
    constructor() {
        console.log("im a modal");
        this.openModalButton = $('.open-modal');
        this.modal = $('.modal');
        this.closeModalButton = $('.modal__close');
        
        this.events();
    }

    events() {

        this.openModalButton.click(this.openModal.bind(this));
        this.closeModalButton.click(this.closeModal.bind(this));

        $(document).keyup(this.keyUpHandler.bind(this)); 
        
    }

    keyUpHandler(e) {
        if(e.keyCode == 27) {
            this.closeModal();
        }
    }

    openModal() {
        this.modal.addClass("modal--is-visible");
        return false; // non fa scrollare il browser in alto se a far partire il metodo è un link
    }

    closeModal() {
        this.modal.removeClass("modal--is-visible");
    }
}

export default Modal;