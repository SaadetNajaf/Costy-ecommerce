const getProducts = async () => {
  try {
    const res = await fetch("../db.json");
    const data = await res.json();
    return data;
  } catch (err) {
    alert(`Error fetching products: ${err.message}`);
    return [];
  }
};
export default getProducts;
