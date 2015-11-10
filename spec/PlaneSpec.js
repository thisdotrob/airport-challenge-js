describe('plane', function() {
  var plane;

  beforeEach(function() {
    plane = new Plane();
  });

  describe('flying and landing', function() {
    it('should be initialized in a flying state', function() {
      expect(plane.flying).toEqual(true);
    });

    it('should land a plane', function(){
      plane.land();
      expect(plane.flying).toEqual(false)
    });
  });

  describe('taking off', function(){
    it('sets the plane to flying', function(){
      plane.land();
      plane.take_off();
      expect(plane.flying).toEqual(true);
    });
  });
});
