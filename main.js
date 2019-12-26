simply.fullscreen(true);
simply.style('small');
var count = parseInt(localStorage.getItem('count')) || 0; 
var kek = [{title : 'Титул 1', text : 'лол кек чебурек'}, {title : 'Титул 2', text : 'лол кек чебурек 2'}];
simply.title(count);
simply.on('singleClick', 'up', function(e) {
  // simply.subtitle('You pressed the ' + e.button + ' button!');
 
  count += 1;
  simply.title(kek[0].title);
  simply.body(kek[0].text);
  localStorage.setItem('count', count);
});
simply.on('singleClick', 'down', function(e) {
  // simply.subtitle('You pressed the ' + e.button + ' button!');
  if(count > 0) {
    count -= 1;
    simply.title(kek[1].title);
    simply.body(kek[1].text);
    localStorage.setItem('count', count);
  }
});
