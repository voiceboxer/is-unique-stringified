module.exports = function(arr) {
  var seen = {};

  return arr.every(function(item) {
    item = String(item);
    if(seen[item]) return false;
    seen[item] = true;
    return true;
  });
};
