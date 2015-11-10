function Plane(weather) {
  this.flying = true;
  this.weather = weather;
};

Plane.prototype.land = function(airport){
  if (this.flying === false) {
    throw new Error('Already landed');
  } else {
    if (this.weather.stormy()) { throw new Error('Too stormy to land'); };
    this.flying = false;
    this.location = airport
    airport.land(this);
  };
};

Plane.prototype.takeOff = function(){
  if (this.flying === true) {
    throw new Error('Already flying');
  } else {
    if (this.weather.stormy()) { throw new Error('Too stormy to take off'); };
    this.flying = true;
  };
};
