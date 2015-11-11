describe('plane', function() {
  var plane;
  var airport;
  var weather;
  var land;
  var takeOff;

  beforeEach(function() {
    airport = jasmine.createSpyObj('airport',['land','takeOff']);
    weather = { isStormy: function(){} };
    land = function(){ plane.land(airport); };
    takeOff = function(){ plane.takeOff(); };
    plane = new Plane(weather);
  });

  describe('under stormy conditions',function(){
    it('raises an error when trying to land', function(){
      spyOn(weather, 'isStormy').and.returnValue(true);
      expect(land).toThrowError('Too stormy to land');
    });
    it('raises error when trying to takeoff', function(){
      spyOn(weather, 'isStormy').and.returnValue(false);
      land();
      weather.isStormy.and.returnValue(true);
      expect(takeOff).toThrowError('Too stormy to take off');
    });
  });

  describe('under non-stormy conditions',function(){
    beforeEach(function(){
      spyOn(weather, 'isStormy').and.returnValue(false);
    });
    it('is initialized in a flying state', function() {
      expect(plane.isFlying).toEqual(true);
    });
    it('sets flying to false on landing', function(){
      plane.land(airport);
      expect(plane.isFlying).toEqual(false)
    });
    it('sets flying to true on takeoff', function(){
      plane.land(airport);
      plane.takeOff();
      expect(plane.isFlying).toEqual(true);
    });
    it('raises error if not flying and tries to land', function(){
      land();
      expect(land).toThrowError('Already landed');
    });
    it('raises error if flying and tries to takeoff', function(){
      expect(takeOff).toThrowError('Already flying');
    });
    it('can land at an airport', function(){
      plane.land(airport);
      expect(airport.land).toHaveBeenCalledWith(plane);
    });
    it('can takeoff from an airport', function(){
      plane.land(airport);
      plane.takeOff();
      expect(airport.takeOff).toHaveBeenCalledWith(plane);
    });
    it('sets location on landing', function(){
      plane.land(airport);
      expect(plane._location).toEqual(airport);
    });
  });
});
