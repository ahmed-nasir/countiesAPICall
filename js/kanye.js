const loadQuotes = () => {
    fetch('https://api.kanye.rest')
        .then(res => res.json())
        .then(data => displayQuotes(data))
}

// loadQuotes();

// display quotes

function displayQuotes(quotes) {
    console.log(quotes.quote);
    const blockQuote = document.getElementById('quote');
    const p = document.createElement('p');
    p.innerText = quotes.quote;
    blockQuote.appendChild(p);
}

