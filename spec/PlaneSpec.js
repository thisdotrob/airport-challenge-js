describe('plane', function() {
  var plane;
  var airport;
  var weather;

  beforeEach(function() {
    airport = { land: function(){} };
    spyOn(airport, 'land');

    weather = { isStormy: function(){} };
    spyOn(weather, 'isStormy').and.returnValue(false);

    plane = new Plane(weather);
  });

  describe('landing', function() {
    it('should be initialized in a flying state', function() {
      expect(plane.flying).toEqual(true);
    });
    it('should land a plane', function(){
      plane.land(airport);
      expect(plane.flying).toEqual(false)
    });
    it('raises error if plane not flying', function(){
      var land = function(){ plane.land(airport); }
      land();
      expect(land).toThrowError('Already landed');
    });
    it('sets the planes location', function(){
      plane.land(airport);
      expect(plane.location).toEqual(airport);
    });
    it('calls land on the airport object', function(){
      plane.land(airport);
      expect(airport.land).toHaveBeenCalled();
    });
    it('raises error if too stormy to land', function(){
      weather.isStormy.and.returnValue(true);
      var land = function(){ plane.land(airport); }
      expect(land).toThrowError('Too stormy to land');
    })
  });

  describe('taking off', function(){
    it('sets the plane to flying', function(){
      plane.land(airport);
      plane.takeOff();
      expect(plane.flying).toEqual(true);
    });
    it('raises error if plane already flying', function(){
      var takeOff = function(){ plane.takeOff(); }
      expect(takeOff).toThrowError('Already flying');
    });
    it('raises error if too stormy', function(){
      var takeOff = function(){ plane.takeOff(); }
      plane.land(airport);
      weather.isStormy.and.returnValue(true);
      expect(takeOff).toThrowError('Too stormy to take off');
    })
  });
});
