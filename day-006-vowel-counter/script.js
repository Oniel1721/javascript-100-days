const SELECTORS = {
    form: '.form',
    result: '.result',
};
const VOWELS = 'AEIOU'

const $form = document.querySelector(SELECTORS.form);
const $result = document.querySelector(SELECTORS.result);


const vowelsCount = (word)=>{
    let count = 0
    for(let i = 0; i<word.length; i++){
        const letter = word[i];
        if(VOWELS.includes(letter.toUpperCase())) count++
    }
    return count;
}

$form.addEventListener('submit', (event) => {
    event.preventDefault();
    const word = new FormData($form).get('word')?.trim() ?? '';
    if(!word) {
        return $result.textContent = `Introduce a word`;
    }
    const count = vowelsCount(word)
    $result.textContent = `${word.toUpperCase()} has ${count} vowel${
        count !== 1?'s':''
    }`;
});