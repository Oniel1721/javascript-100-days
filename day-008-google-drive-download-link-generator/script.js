const SELECTORS = {
    form: 'form',
    textarea: 'textarea',
    copyButton: '#copy-button',
    download: 'a#download'
}
const $form = document.querySelector(SELECTORS.form)
const $textarea = document.querySelector(SELECTORS.textarea)
const $copyButton = document.querySelector(SELECTORS.copyButton)
const $download = document.querySelector(SELECTORS.download)

const generateDownloadLink = (id) => {
    return `https://drive.google.com/uc?export=download&id=${id}`
}

// https://drive.google.com/file/d/1ITR-qyqBzvAjbUd7Vq-A9v9yOmPHgdki/view?usp=drive_link
$form.addEventListener('submit', (e) => {
    e.preventDefault()
    const formData = new FormData($form)
    const urlString = formData.get('url')?.trim()
    if(!urlString) return;
    const url = new URL(urlString)
    if(url.host !== 'drive.google.com'){
        alert('Please enter a valid google drive link')
        return;
    };
    const id = url.pathname.split('/')[3]
    const downloadLink = generateDownloadLink(id)
    $textarea.value = downloadLink
    $download.href = downloadLink
})

$copyButton.addEventListener('click', () => {
    const toCopy = $textarea.value.trim()
    if(!toCopy) return;
    navigator.clipboard.writeText(toCopy)
    .then(() => {
        alert('Copied to clipboard')
    })
})