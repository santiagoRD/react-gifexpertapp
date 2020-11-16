export const getGifs = async category => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=5HDYjN28ORB2FueIJVLVmwbZn1VaXzgG`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const images = data.map(img => ({
    id: img.id,
    title: img.title,
    url: img.images?.downsized_medium.url,
  }));

  return images;
};
