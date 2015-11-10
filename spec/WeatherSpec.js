describe('weather', function() {
  var weather;

  beforeEach(function(){

    weather = new Weather();
  });

  describe('stormy', function() {
    it('responds true with probability 0.5', function() {
      spyOn(Math, "random").and.returnValue(0.499);
      expect(weather.isStormy()).toEqual(true);
    });
    it('responds false with probability 0.5', function() {
      spyOn(Math, "random").and.returnValue(0.5);
      expect(weather.isStormy()).toEqual(false);
    });
  })
})
