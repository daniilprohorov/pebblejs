simply.fullscreen(true)
var count = parseInt(localStorage.getItem('count')) || 0; 
simply.title(count)
simply.on('singleClick', 'up', function(e) {
  // simply.subtitle('You pressed the ' + e.button + ' button!');
 
  count += 1
  simply.title(count)
  localStorage.setItem('count', count);
});
simply.on('singleClick', 'down', function(e) {
  // simply.subtitle('You pressed the ' + e.button + ' button!');
  if(count > 0) {
    count -= 1
    simply.title(count)
    localStorage.setItem('count', count);
  }
});
