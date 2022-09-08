async function requestDescription(productId) {
  try {
    const endPoint = `https://api.mercadolibre.com/items/${productId}/description`;
    const response = await fetch(endPoint);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
    return {};
  }
}

export default requestDescription;
