function Airport() {
  this.capacity = 20;
  this.planes = []
}

Airport.prototype.land = function(plane) {
  if (this.planes.length === this.capacity - 1) {
    throw new Error('Airport full');
  } else {
    this.planes.push(plane);
  };
};

Airport.prototype.takeOff = function(plane) {
  index = this.planes.indexOf(plane);
  if (index === -1) {
    throw new Error('Plane not at airport');
  } else {
    this.planes.splice(index, 1);
  };
};

Airport.prototype.setCapacity = function(capacity) {
  this.capacity = capacity;
};
