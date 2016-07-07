module.exports = function setUSD(val) {
    return val.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
};
