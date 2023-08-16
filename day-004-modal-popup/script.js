const SELECTORS = {
    open: 'button[data-action="open"]',
    close: 'button[data-action="close"]',
    dialog: 'dialog',
    modal: '.modal'
};

const $openButton = document.querySelector(SELECTORS.open);
const $closeButton = document.querySelector(SELECTORS.close);
const $dialog = document.querySelector(SELECTORS.dialog);
const $modal = document.querySelector(SELECTORS.modal);

const open = () => {
    $dialog.showModal();
}

const close = () => {
    $dialog.close();
}

const actions = {
    open,
    close
}

document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('click', (event) => {
       const actionName = event.target.getAttribute('data-action');
       if(!actionName) return;
        const action = actions[actionName];
        if(!action) return;
        action();
    });
});