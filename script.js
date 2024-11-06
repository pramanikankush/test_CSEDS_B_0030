function getJoke() {
    fetch('https://v2.jokeapi.dev/joke/Any')
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
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
            console.error("Error fetching joke:", error);
            document.getElementById('joke-text').innerText = "Sorry, couldn't load a joke! Try again later.";
            document.getElementById('character-count').innerText = "Characters: 0";
        });
}

function clearJoke() {
    document.getElementById('joke-text').innerText = "Click the button to see a joke";
    document.getElementById('character-count').innerText = "Characters: 0";
}
