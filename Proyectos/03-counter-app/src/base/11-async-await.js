

const getImagen = async () => {
    try {
       const apikey = 'OSJaNghA7F1A9om1v45bRqRAAOAnniNP';
       const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apikey}&tag=&rating=g`);
       const { data } = await resp.json();
       const { url } = data.images.original;
       const img = document.createElement('img');
       img.src = url;
       document.body.append(img);
    } catch (error) {
        console.error(error);
    }
   };
   getImagen();