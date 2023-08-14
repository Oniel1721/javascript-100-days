const SELECTORS = {
    value: '.generator__value',
    button: '.generator__button[data-action="generate"]',
};

const $value = document.querySelector(SELECTORS.value);
const $button = document.querySelector(SELECTORS.button);

const getValue = () => {
    return parseInt($value.textContent);
}

const setValue = (value) => {
    $value.textContent = value;
}

const createRandomNumber = () => {
    return Math.floor(Math.random() * 101);
};

const repeat = (times, callback, sleepTime) => {
    for (let i = 0; i < times; i++) {
        setTimeout(() => {
            callback();
        }, i * sleepTime);
    }
};

const generate = () => {
    const newValue = createRandomNumber();
    setValue(newValue);
}

const actions = {
    generate
};

document.addEventListener('DOMContentLoaded', () => {
    actions.generate();
    document.addEventListener('click', (event) => {
        const dataAction = event.target.getAttribute('data-action')
        const action = actions[dataAction];
        if (!action) return;
        repeat(10, action, 50);
    });
});