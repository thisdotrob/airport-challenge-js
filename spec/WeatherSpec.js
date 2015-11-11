describe('weather', function() {
  var weather;

  beforeEach(function(){
    weather = new Weather();
  });

    it('is stormy with probability 0.5', function() {
      spyOn(Math,'random').and.returnValue(0.499);
      expect(weather.isStormy()).toBeTruthy();
    });
    it('is stormy false with probability 0.5', function() {
      spyOn(Math,'random').and.returnValue(0.5);
      expect(weather.isStormy()).toBeFalsy();
    });
});
