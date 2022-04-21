function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
  }

async function getQuote(){
    console.log("Quote button was clicked");
  
    try{
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': 'andruxnet-random-famous-quotes.p.rapidapi.com',
                'X-RapidAPI-Key': //deleted after assignemnt was graded
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

  