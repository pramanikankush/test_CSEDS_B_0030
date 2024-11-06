
function getJoke() {
    fetch('https://v2.jokeapi.dev/joke/Any')
        .then(response => response.json())
        .then(data => {
            let jokeText;
            if (data.type === 'single') {
                jokeText = data.joke;
            } else {
                jokeText = data.setup + " ... " + data.delivery;
            }
            document.getElementById('joke-text').innerText = jokeText;
            document.getElementById('character-count').innerText = "Characters: " + jokeText.length;
        })
        .catch(error => {
            document.getElementById('joke-text').innerText = "Oops, couldn't load a joke!";
            document.getElementById('character-count').innerText = "Characters: 0";
        });
}

function clearJoke() {
    document.getElementById('joke-text').innerText = "Click the button to see a joke";
    document.getElementById('character-count').innerText = "Characters: 0";
}
