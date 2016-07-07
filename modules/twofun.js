var random = require('./random.js');
var money = require('./usd.js');

module.exports.finalBalance = function() {
  return money(random(100, 1000000));
}
