import Modal from './modules/Modal';
import Text from './modules/Text';

var modalContentFooter = new Modal("modal-content-footer", "open-modal-footer");
var modalContentHeader = new Modal("modal-content-header", "open-modal-header");


modalContentFooter.openModal();

var text = new Text();

var textToDisplay = text.toDisplay();

//modal.populateModal(textToDisplay);