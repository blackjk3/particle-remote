var five = require('johnny-five');
var Spark = require("spark-io");

var board = new five.Board({
  io: new Spark({
    deviceId:"2d0046000547343232363230",
    token: "8b4478446154736452987331e2096da63df5231b"
  })
});


var left_wheel, right_wheel;

var r_speed = 0;
var l_speed = 0;

board.on("ready", function() {

  console.log("Welcome to Nodebots Day! *************************************")
  console.log("Control the bot with the arrow keys, and SPACE to stop.")

   left_wheel = new five.Servo({
        pin: "D0",
        type: "continuous"
    }).stop();
    right_wheel = new five.Servo({
        pin: "D1",
        type: "continuous"
    }).stop();

    process.stdin.resume();
    process.stdin.setEncoding('utf8');
    process.stdin.setRawMode(true);
});


function processDirection(cmd){

    console.log('Process Command :: ' + cmd);

    if (!cmd) return;

    if (cmd == 'q') {
        console.log('Quitting');
        process.exit();

    } else if (cmd == 'up') {

        console.log('Forward');
	r_speed += 1;
	l_speed += 1;
        left_wheel.ccw(l_speed/10);
        right_wheel.cw(r_speed/10);

    } else if (cmd == 'down') {

        console.log('Backward');
	r_speed -= 1;
	l_speed -= 1;
        left_wheel.ccw(l_speed/10);
        right_wheel.cw(r_speed/10);

    } else if (cmd == 'left') {

        console.log('Left');
    	r_speed += 1;
    	//l_speed -= 1;
            //left_wheel.ccw(l_speed/10);
            right_wheel.cw(r_speed/10);


    } else if (cmd == 'right') {

    	console.log('Right');
    	//r_speed -= 1;
    	l_speed += 1;
    	left_wheel.ccw(l_speed/10);
    	//right_wheel.cw(r_speed/10);

    } else if (cmd == 'stop') {

    	console.log('Stopping');
    	r_speed =0;
    	l_speed =0;
    	left_wheel.stop();
    	right_wheel.stop();

    }

};
module.exports=processDirection;
