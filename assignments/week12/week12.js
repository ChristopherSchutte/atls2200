async function getQuote(){
    console.log("Quote button was clicked");

    try{
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': 'andruxnet-random-famous-quotes.p.rapidapi.com',
                'X-RapidAPI-Key': '3501f53480mshdf8c7f69f0b833ep1df4c5jsn68aef178fab5'
            }
        };
    
        let response = await fetch('https://andruxnet-random-famous-quotes.p.rapidapi.com/?cat=famous&count=1', options);
        let json = await response.json();
        console.log(json)

        displayQuote(json[0].quote)
        displayAuthor(json[0].author)

    } catch(error){
        console.log(error)
    }
}

function displayQuote(quote) {
    const quoteText = document.querySelector('#js-quote-text');
    quoteText.textContent = quote;
}

function displayAuthor(author) {
    const quoteAuthor = document.querySelector('#js-quote-author');
    quoteAuthor.textContent = author;
}

const endPoint = 'https://random-quote-generator.herokuapp.com/api/quotes/random'

const quoteButton = document.querySelector('#js-new-quote');
quoteButton.addEventListener('click', getQuote);



