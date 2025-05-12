let textInput = document.querySelector('#textInput');
let wordCount = document.querySelector('#wordCount');

textInput.addEventListener('input', () => {
    let text = textInput.value.trim();
    wordCount.innerHTML = text ? text.split(/\s+/).length : 0;
});

function clearText() {
    textInput.value = '';
    wordCount.textContent = 0;
}