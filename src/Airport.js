function Airport() {
  this.CAPACITY = 20;
  this._hangar = [];
}

Airport.prototype.planes = function(){ return this._hangar; };

Airport.prototype.land = function(plane) {
  if (this._isFull()) {
    throw new Error('Airport full');
  } else {
    this._hangar.push(plane);
  };
};

Airport.prototype.takeOff = function(plane) {
  index = this._hangar.indexOf(plane);
  if (index === -1) {
    throw new Error('Plane not at airport');
  } else {
    this._hangar.splice(index, 1);
  };
};

Airport.prototype.setCapacity = function(capacity) {
  this.CAPACITY = capacity;
};

Airport.prototype._isFull = function() {
  return this._hangar.length === this.CAPACITY - 1;
}
