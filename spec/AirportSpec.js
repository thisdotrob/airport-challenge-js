describe('airport', function() {
  var airport;
  var plane;

  beforeEach(function() {
    plane = {};
    airport = new Airport();
  });

  describe('initialize', function() {
    it('has a default capacity', function() {
      expect(airport.capacity).toEqual(20);
    });
    it('has an empty array of planes', function() {
      expect(airport.planes).toEqual([]);
    });
  });

  describe('land', function() {
    it('adds a plane to the array', function() {
      airport.land(plane);
      expect(airport.planes.pop()).toEqual(plane);
    });
    it('raises an error if the array is full', function() {
      var land = function(){ airport.land(plane); }
      for(i=1; i<20; i++) { land(); };
      expect(land).toThrowError('Airport full');
    });
  });

  describe('takeOff', function() {
    it('removes the plane from the array', function() {
      airport.land(plane);
      airport.takeOff(plane);
      expect(airport.planes).toEqual([]);
    });
    it('raises an error if plane not at airport', function() {
      var takeOff = function(){ airport.takeOff(plane); };
      expect(takeOff).toThrowError('Plane not at airport');
    });
  });

  describe('setCapacity', function() {
    it('modifies the airport\'s capacity', function() {
      airport.setCapacity(1);
      expect(airport.capacity).toEqual(1);
    });
  });

});
