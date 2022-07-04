export const getGifs = async ( category) => {

    const API_KEY = "0ftMvfKM12JWDycoEA0DsldZe3i1ApRF";
    const url = `http://api.giphy.com/v1/gifs/search?q=${ encodeURI(category)}&api_key=${API_KEY}`;

    const response = await fetch(url);
    const { data } = await response.json();
    //console.log(data);

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    //console.log(gifs);
    
    return gifs;

}