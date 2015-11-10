function Plane() {
  this.flying = true;
};

Plane.prototype.land = function(){
  this.flying = false;
}

Plane.prototype.take_off = function(){
  this.flying = true;
}
