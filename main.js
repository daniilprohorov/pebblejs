simply.fullscreen(true)
simply.on('singleClick', 'up', function(e) {
  simply.subtitle('You pressed the ' + e.button + ' button!');
});
