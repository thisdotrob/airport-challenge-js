function Plane(weather){
  this.isFlying = true;
  this._weather = typeof weather !== 'undefined' ? weather : new Weather();
};

Plane.prototype.land = function(airport){
  if (this.isFlying === false) {
    throw new Error('Already landed');
  } else {
    if (this._weather.isStormy()) {
      throw new Error('Too stormy to land');
    } else {
      this.isFlying = false;
      this._setLocation(airport)
    };
  };
};

Plane.prototype.takeOff = function(){
  if (this.isFlying === true) {
    throw new Error('Already flying');
  } else {
    if (this._weather.isStormy()) {
      throw new Error('Too stormy to take off');
    } else {
      this.isFlying = true;
      this._unsetLocation();
    };
  };
};

Plane.prototype._setLocation = function(airport){
  airport.land(this);
  this._location = airport;
};

Plane.prototype._unsetLocation = function(){
  this._location.takeOff(this);
  this._location = null;
};
