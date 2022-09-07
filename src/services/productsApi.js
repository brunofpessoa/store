async function requestProducts(categoryId = '', query = '') {
  try {
    const endPoint = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
    const response = await fetch(endPoint);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log(error.message);
    return [];
  }
}

export default requestProducts;
