import $ from 'jquery';

class Modal {
    constructor(modalClass, openModal) {
        
        this.openModalButton = $('.'+ openModal);
        this.modal = $('.'+ modalClass);
        this.modalContent = $('.modal__content');
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
        return false;
    }

    closeModal() {
        this.modal.removeClass("modal--is-visible");
    }


    emptyModal() {
        this.modalContent.empty();
    } 

    populateModal(content) {
        this.modalContent.html(content);
    }

}

class ModalDynamicContent extends Modal  {



}

export default Modal;