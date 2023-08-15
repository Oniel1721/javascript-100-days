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

const createRandomNumber = (max) => {
    return Math.floor(Math.random() * max);
};

const createRGBNumber = () => {
    return [createRandomNumber(255), createRandomNumber(255), createRandomNumber(255)]
}

const generate = () => {
    const rgb = createRGBNumber(255)
    const hex = rgb.map((value) => value.toString(16)).join('')
    const color = `#${hex}`
    document.body.style.backgroundColor = color;
    setValue(color);
}

const actions = {
    generate
};

document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('click', (event) => {
        const dataAction = event.target.getAttribute('data-action')
        const action = actions[dataAction];
        if (!action) return;
        action()
    });
});