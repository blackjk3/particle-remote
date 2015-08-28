var five = require('johnny-five');
var Spark = require("spark-io");

var board, left_wheel, right_wheel;

var r_speed = 0;
var l_speed = 0;

var bot = {

  init: function(deviceId, token) {
    try {
      board = new five.Board({
        io: new Spark({
          deviceId: deviceId, // BOT
          token: token
        })
      });

      board.on("ready", function() {

       left_wheel = new five.Servo({
          pin: "D0",
          type: "continuous"
        }).stop();

        right_wheel = new five.Servo({
          pin: "D1",
          type: "continuous"
        }).stop();
        
      });
    } catch(ex) {
      console.log("exception");
    }
  },

  processDirection: function (cmd){

    if (!cmd || !board) return;
    if (cmd == 'up') {
      // Forward
      r_speed += 1;
      l_speed += 1;
      
      left_wheel.ccw(l_speed/10);
      right_wheel.cw(r_speed/10);

    } else if (cmd == 'down') {
      
      r_speed -= 1;
      l_speed -= 1;
      
      left_wheel.ccw(l_speed/10);
      right_wheel.cw(r_speed/10);

    } else if (cmd == 'left') {

      r_speed += 1;
      //l_speed -= 1;
      //left_wheel.ccw(l_speed/10);
      right_wheel.cw(r_speed/10);

    } else if (cmd == 'right') {

      //r_speed -= 1;
      l_speed += 1;
      left_wheel.ccw(l_speed/10);
      //right_wheel.cw(r_speed/10);

    } else if (cmd == 'stop') {

      r_speed =0;
      l_speed =0;
      left_wheel.stop();
      right_wheel.stop();

    }

  }
};

module.exports = bot;
