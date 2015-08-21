// var ws = new WebSocket("ws://localhost:3000");
var socket = io('http://localhost:3000');
  socket.on('connect', function(socket){
    $('.btn').on('touchstart click', function(e) {
      var target = $(e.currentTarget);
      var direction = target.data('dir');
      
      window.socket.emit('control', {
        direction: direction
      });

    });

  });
  socket.on('event', function(data){});
  socket.on('disconnect', function(){});

// ws.onopen = function (event) {
//   ws.send('test');
//   $(function() {
//     $('.btn').on('touchstart click', function(e) {
//       var target = $(e.currentTarget);
//       // $.ajax({
//       //   url: 'http://10.104.32.146:3000/controls/' + target.data('dir'),
//       //   success: function() {
//       //     console.log("SDLKFJdls;kfjas;ldfk")
//       //   },
//       //   error: function() {
//       //     console.log("error")
//       //   }
//       // });
//       ws.send(target.data('dir'));
//     });


//   });  
// };