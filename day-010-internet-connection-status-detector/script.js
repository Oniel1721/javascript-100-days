const SELECTORS = {
    container: 'main',
    statusText: '.status-text',
};

const $container = document.querySelector(SELECTORS.container);
const $statusText = document.querySelector(SELECTORS.statusText);

function handleOnline (){
    $container.setAttribute('data-internet', 'online')
    $statusText.textContent = "You're ONLINE!!! Connection looks good."
}

function handleOffline(){
    $container.setAttribute('data-internet', 'offline')
    $statusText.textContent = "OOPS!!! Your Internet Connection is Down."
}

window.ononline = handleOnline
window.onoffline = handleOffline

if(navigator.onLine) handleOnline()
else handleOffline()