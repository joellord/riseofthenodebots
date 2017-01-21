var j5 = require("johnny-five");

var board = new j5.Board();

board.on("ready", function() {
  var led = new j5.Led(13);
  led.blink(500);

  var sensor = new j5.Sensor("A0");
  sensor.on("change", function() {
  	if (sensor.value > 750) {
  		led.on();
  	} else {
  		led.off();
  	}
  });
});