function Weather(){
  this._PROBABILITY = 0.5;
};

Weather.prototype.isStormy = function(){
  return (Math.random() < this._PROBABILITY);
};
