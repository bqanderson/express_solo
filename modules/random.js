module.exports = function randomAmount(min, max) {
  return (Math.random() * (max - min)) + min;
};
