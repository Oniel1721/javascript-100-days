const SELECTORS = {
    input: '.input',
    result: '.result',
};

const $input = document.querySelector(SELECTORS.input);
const $result = document.querySelector(SELECTORS.result);

$input.addEventListener('input', (event) => {
    $result.textContent = event.target.value.length;
});