const SELECTORS = {
    copyble: '.copyble',
    button: '.button',
};

const $copyble = document.querySelector(SELECTORS.copyble);
const $button = document.querySelector(SELECTORS.button);


const vowelsCount = (word)=>{
    let count = 0
    for(let i = 0; i<word.length; i++){
        const letter = word[i];
        if(VOWELS.includes(letter.toUpperCase())) count++
    }
    return count;
}

$button.addEventListener('click', () => {
    const textToCopy = $copyble.innerText
    navigator.clipboard.writeText(textToCopy)
    $button.textContent = 'Copied!'
    setTimeout(()=>{
        $button.textContent = 'Copy'
    }, 2000)
});