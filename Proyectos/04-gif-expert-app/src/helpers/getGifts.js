
export const getGifs = async (category) => {
    const apikey = 'OSJaNghA7F1A9om1v45bRqRAAOAnniNP';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${encodeURI(category)}&limit=10`;
    const peticion = await fetch(url);
    const { data } = await peticion.json();
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });
    console.log(gifs)
    return gifs;
};