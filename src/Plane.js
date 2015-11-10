function Plane() {
  this.flying = true;
};

Plane.prototype.land = function(airport){
  if (this.flying === false) {
    throw new Error('Already landed');
  } else {
    this.flying = false;
    this.location = airport
    airport.land(this);
  };
};

Plane.prototype.takeOff = function(){
  if (this.flying === true) {
    throw new Error('Already flying');
  } else {
    this.flying = true;
  };
};
