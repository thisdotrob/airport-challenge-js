describe('plane', function() {
  var plane;

  beforeEach(function() {
    plane = new Plane();
  });

  describe('flying and landing', function() {
    it('should be initialized in a flying state', function() {
      expect(plane.flying).toEqual(true);
    });

  });
});
