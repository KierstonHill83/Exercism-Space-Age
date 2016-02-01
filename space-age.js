// var SpaceAge = function(seconds) {
//   this.seconds = seconds;
//   this.earthYears = 0;
// };

// SpaceAge.prototype.seconds = function() {
//   return this.seconds;
// };

// SpaceAge.prototype.onEarth = function() {
//   this.earthYears = (((this.seconds / 60) / 60) / 24) / 365.25;
//   return Number(this.earthYears.toFixed(2));
// };

// SpaceAge.prototype.onMercury = function() {
//   var mercury = this.earthYears / 0.2408467;
//   return Number(mercury.toFixed(2));
// };

// SpaceAge.prototype.onVenus = function() {
//   var venus = this.earthYears / 0.61519726;
//   return Number(venus.toFixed(2));
// };

// SpaceAge.prototype.onMars = function() {
//   var mars = this.earthYears / 1.8808158;
//   return Number(mars.toFixed(2));
// };

// SpaceAge.prototype.onJupiter = function() {
//   var jupiter = this.earthYears / 11.862615;
//   return Number(jupiter.toFixed(2));
// };

// SpaceAge.prototype.onSaturn = function() {
//   var saturn = this.earthYears / 29.447498;
//   return Number(saturn.toFixed(2));
// };

// SpaceAge.prototype.onUranus = function() {
//   var uranus = this.earthYears / 84.016846;
//   return Number(uranus.toFixed(2));
// };

// SpaceAge.prototype.onNeptune = function() {
//   var neptune = this.earthYears / 164.79132;
//   return Number(neptune.toFixed(2));
// };


var SpaceAge = function (seconds) {
  this.earthYearInSeconds = 31557600;
  this.seconds = seconds;

  this.roundDec = function (num) {
    return parseFloat(num.toFixed(2));
  };

  var planets = {
    onEarth: 1,
    onMercury: 0.2408467,
    onVenus: 0.61519726,
    onMars: 1.8808158,
    onJupiter: 11.862615,
    onSaturn: 29.447498,
    onUranus: 84.016846,
    onNeptune: 164.79132
  };

  this.constructFn = function (fn) {
    return 'return this.roundDec(this.seconds ' +
           '/ (this.earthYearInSeconds * ' + 
           planets[fn] + 
           '));';
  };

  for ( planetFnName in planets ) {
    this[planetFnName] = new Function('', this.constructFn(planetFnName));
  }
};


module.exports = SpaceAge;