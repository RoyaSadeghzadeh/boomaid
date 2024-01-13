export const getEcommerceMenu = async () => {
  const res = await fetch("http://103.75.198.11:3000/ecommerce");
  return await res.json();
};
