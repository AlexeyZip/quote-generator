// Get quote from API

async function getQuote() {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=ru&format=json'
    try{
        const response = await fetch(proxyUrl + apiUrl),
                data = await response.json();
        console.log(data);
    } catch(error) {
        // getQuote();
        console.log('Упс, похоже цитаты закончились', error);
    }
}

//On load

getQuote()