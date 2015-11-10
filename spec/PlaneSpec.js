describe('plane', function() {
  var plane;
  var airport = null;

  beforeEach(function() {
    plane = new Plane();

    airport = {
      land: function(){
      }
    };

    spyOn(airport, 'land');
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
  });
});
