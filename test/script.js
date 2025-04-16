const bulb = document.getElementById('bulb');
const toggleButton = document.getElementById('toggleButton');

toggleButton.addEventListener('click', () => {
    // Toggle the bulb state
    bulb.classList.toggle('on');
    bulb.classList.toggle('off');
});
