// ref https://developer.mozilla.org/es/docs/Web/API/Fetch_API
//ref: https://developers.giphy.com/
const apikey = 'OSJaNghA7F1A9om1v45bRqRAAOAnniNP';
const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apikey}&tag=&rating=g`);

// peticion.then(resp => {
//     resp.json().then(data=> console.log(data));

// }).catch(console.warn);

// forma resumida

peticion
    .then(resp => resp.json())
    .then(({ data }) => {
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    })
    .catch(console.warn);