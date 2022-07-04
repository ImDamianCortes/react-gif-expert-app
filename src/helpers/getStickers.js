export const getStickers = async ( category) => {

    const API_KEY = "0ftMvfKM12JWDycoEA0DsldZe3i1ApRF";
    const url = `http://api.giphy.com/v1/stickers/search?q=${ encodeURI(category)}&api_key=${API_KEY}`;

    const response = await fetch(url);
    const { data } = await response.json();
    //console.log(data);

    const stickers = data.map(sticker => ({
        id: sticker.id,
        title: sticker.title,
        url: sticker.images.downsized_medium.url
    }));
    //console.log(gifs);
    
    return stickers;

}