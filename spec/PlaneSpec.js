describe('plane', function() {
  var plane;

  beforeEach(function() {
    plane = new Plane();
  });

  describe('landing', function() {
    it('should be initialized in a flying state', function() {
      expect(plane.flying).toEqual(true);
    });
    it('should land a plane', function(){
      plane.land();
      expect(plane.flying).toEqual(false)
    });
    it('raises error if plane not flying', function(){
      var land = function(){ plane.land(); }
      land();
      expect(land).toThrowError('Already landed');
    });
  });

  describe('taking off', function(){
    it('sets the plane to flying', function(){
      plane.land();
      plane.takeOff();
      expect(plane.flying).toEqual(true);
    });
    it('raises error if plane already flying', function(){
      var takeOff = function(){ plane.takeOff(); }
      expect(takeOff).toThrowError('Already flying');
    });
  });
});
