const SELECTORS = {
    counterValue: '.counter__value',
    subtractButton: '.counter__subtract[data-action="subtract"]',
    addButton: '.counter__add[data-action="add"]',
    resetButton: '.counter__reset[data-action="reset"]',
};

const $counterValue = document.querySelector(SELECTORS.counterValue);
const $subtractButton = document.querySelector(SELECTORS.subtractButton);
const $addButton = document.querySelector(SELECTORS.addButton);
const $resetButton = document.querySelector(SELECTORS.resetButton);

const getCounterValue = () => {
    return parseInt($counterValue.textContent);
}

const setCounterValue = (value) => {
    $counterValue.textContent = value;
}

const subtract = () => {
    const counterValue = getCounterValue();
    setCounterValue(counterValue - 1);
}

const add = () => {
    const counterValue = getCounterValue();
    setCounterValue(counterValue + 1);
}

const reset = () => {
    setCounterValue(0);
}

const actions = {
    subtract,
    add,
    reset,
};

document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('click', (event) => {
        const dataAction = event.target.getAttribute('data-action')
        const action = actions[dataAction];
        if (!action) return;
        action();
    });
});