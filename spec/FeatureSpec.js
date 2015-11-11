describe('Feature test', function(){
  var plane;
  var airport;
  var takeOff;
  var land;

  beforeEach(function(){
    plane = new Plane();
    airport = new Airport();
    takeOff = function(){ plane.takeOff(); };
    land = function(){ plane.land(airport); }
  });

  describe('under stormy conditions',function(){
    it('prevents takeoff',function(){
      spyOn(Math,'random').and.returnValue(1);
      land();
      Math.random.and.returnValue(0)
      expect(takeOff).toThrowError('Too stormy to take off');
      expect(airport.planes()).toContain(plane);
    });
    it('prevents landing',function(){
      spyOn(Math,'random').and.returnValue(0);
      expect(land).toThrowError('Too stormy to land');
      expect(airport.planes()).not.toContain(plane);
    });
  });

  describe('under non-stormy conditions',function(){
    beforeEach(function(){
      spyOn(Math,'random').and.returnValue(1);
    });
    it('planes can be instructed to land at an airport', function(){
      land();
      expect(airport.planes()).toContain(plane);
    });
    it('planes can be instructed to takeoff', function(){
      land();
      takeOff();
      expect(airport.planes()).not.toContain(plane);
    });
  });

});
