export const randomName = () => {
  const posible = "0123456789abcdefghijklmnopqrstuvwxyz";
  let result = "";
  for (let i = 0; i < 10; i++) {
    result += posible[Math.floor(Math.random() * posible.length)];
  }
  return result;
};
