function countVowels() {
  let text = document.querySelector('#textInput').value;
  let vowels = 'aeiouAEIOU';
  let count = 0;

  for (let i = 0; i < text.length; i++) {
    if (vowels.includes(text[i])) {
      count++;
    }
  }
  document.querySelector('#result').innerHTML = `Number of vowels: ${count}`;
}
