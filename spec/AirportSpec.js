describe('airport', function() {
  var airport;
  var plane;
  var land;
  var takeOff;

  beforeEach(function() {
    airport = new Airport();
    plane = jasmine.createSpy('plane');
    land = function(){ airport.land(plane); }
    takeOff = function(){ airport.takeOff(plane); };
  });

  it('has a default capacity', function() {
    expect(airport.CAPACITY).toEqual(20);
  });
  it('is initialized containing no planes', function() {
    expect(airport.planes()).toEqual([]);
  });
  it('can land a plane', function() {
    land();
    expect(airport.planes()).toEqual([plane]);
  });
  it('can takeoff a plane', function() {
    land();
    takeOff();
    expect(airport.planes()).toEqual([]);
  });
  it('raises an error if the hangar is full', function() {
    for(i=1; i<20; i++) { land(); };
    expect(land).toThrowError('Airport full');
  });
  it('raises an error if plane not at airport', function() {
    expect(takeOff).toThrowError('Plane not at airport');
  });
  it('modifies the airport\'s capacity', function() {
    airport.setCapacity(1);
    expect(airport.CAPACITY).toEqual(1);
  });

});
