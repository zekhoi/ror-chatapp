export const generateUsername = () => {
  const random = Math.floor(Math.random() * 1000000);
  return `user${random}`;
};
