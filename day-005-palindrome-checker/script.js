const SELECTORS = {
    form: '.form',
    result: '.result',
};

const $form = document.querySelector(SELECTORS.form);
const $result = document.querySelector(SELECTORS.result);

const isPalindrome = (word = "") => {
    if(!word) return false;
    const reversedWord = word.split('').reverse().join('');
    return word === reversedWord;
}

$form.addEventListener('submit', (event) => {
    event.preventDefault();
    const word = new FormData($form).get('word')?.trim().toUpperCase() ?? '';
    if(!word) {
        return $result.textContent = `Introduce a word`;
    }
    if(isPalindrome(word)){
        $result.textContent = `${word} is a palindrome`;
    }
    else {
        $result.textContent = `${word} is NOT a palindrome`;
    }
});