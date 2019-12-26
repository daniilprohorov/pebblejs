simply.fullscreen(true)
var count = 0
simply.title(count)
simply.on('singleClick', 'up', function(e) {
  // simply.subtitle('You pressed the ' + e.button + ' button!');
  count += 1
});
simply.on('singleClick', 'down', function(e) {
  // simply.subtitle('You pressed the ' + e.button + ' button!');
  count -= 1
});
