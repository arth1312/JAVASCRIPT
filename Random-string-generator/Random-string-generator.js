function generateString() {
  let characters = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab eius placeat labore accusamus dolor veritatis! Fugit    
                    adipisci totam tenetur, provident ducimus voluptas minima accusamus nulla quae commodi. Laborum, illo dolor.`;
  let result = '';
  for (let i = 0; i < 15; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }
  document.querySelector('#result').innerHTML = result;
}
