fetch('./data.json')
  .then((res) => res.json())
  .then((data) => {
    const generatedData = data[Math.floor(Math.random() * data.length)];

    document.getElementById('word').innerHTML = generatedData.word;
    document.getElementById('description').innerHTML =
      generatedData.description;
  });
