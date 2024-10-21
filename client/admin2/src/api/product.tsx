export const getAllProducts = async () => {
    const response = await fetch("http://localhost:5001/product");
    return response.json();
}



export const createProduct = async (product) => {
    await fetch("http://localhost:5001/product", {
 method: "POST",
 headers: {
   "Content-Type": "application/json",
 },
 body: JSON.stringify(product),
});
// return response.json();
};
