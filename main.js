simply.fullscreen(true);
simply.style('small');
var count = parseInt(localStorage.getItem('count')) || 0; 
var kek = ['lol', 'kek', 'petuh', 'lulz'];
simply.title(count);
simply.on('singleClick', 'up', function(e) {
  // simply.subtitle('You pressed the ' + e.button + ' button!');
 
  count += 1;
  simply.title(kek[1]);
  localStorage.setItem('count', count);
});
simply.on('singleClick', 'down', function(e) {
  // simply.subtitle('You pressed the ' + e.button + ' button!');
  if(count > 0) {
    count -= 1;
    simply.title(kek[2]);
    localStorage.setItem('count', count);
  }
});
