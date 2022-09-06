async function requestProducts(categoryId = '', query = '') {
  try {
    const END_POINT = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
    const response = await fetch(END_POINT);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log(error.message);
    return [];
  }
}

export default requestProducts;
