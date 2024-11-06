const apiUrl = "https://localhost:32773/Products";

export const getProducts = async () => {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Fetched products:", data); // Log fetched products to console
    return data;

  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
