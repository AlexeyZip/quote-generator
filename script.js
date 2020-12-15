const quoteContainer = document.getElementById('quote-container'),          
        quoteText = document.getElementById('quote'),  
        authorText = document.getElementById('author'),
        twitterBtn = document.getElementById('twitter'),
        newQuoteBtn = document.getElementById('new-quote');  
// Get quote from API
async function getQuote() {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=ru&format=json'
    try{
        const response = await fetch(proxyUrl + apiUrl),
                data = await response.json();
        // If author unknown        
        if (data.quoteAuthor === '') {
            authorText.innerText = 'Неизвестный автор'
        }  else {
            authorText.innerText = data.quoteAuthor;
        }
      // Reduce font size for long quotes
      if (data.quoteText.length > 120) {
          quoteText.style.fontSize = '18px'
      } else {
        quoteText.style.fontSize = '30px'
      }
        quoteText.innerText = data.quoteText;
    } catch(error) {
        // getQuote();
        console.log('Упс, похоже цитаты закончились', error);
    }
}

//Twit quote
function tweetQuote() {
  const quote = quoteText.innerHTML;
  const author = authorText.innerHTML;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
  window.open(twitterUrl, '_blank')
}

//Event Listener
newQuoteBtn.addEventListener('click', getQuote);
twitterBtn.addEventListener('click', tweetQuote)

//On load
getQuote()