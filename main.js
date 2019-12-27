simply.fullscreen(true);
simply.style('small');
simply.scrollable(true);
var count = 0; 
var data = [{title : 'Титул 1', text : 'лол кек чебурекasdf;asdjf;alsjkdf;lasjkdf;lasjkdfl;ajsdl;fjdjkfasd;flkasjdf;laksjdflkasjdf;lkajsd;flkjasldasdf;jkasdf'}, {title : 'Титул 2', text : 'лол кек чебурек 2'}];
simply.title(count);
simply.on('singleClick', 'select', function(e) {
  // simply.subtitle('You pressed the ' + e.button + ' button!');
 
  count += 1;
  simply.title(data[0].title);
  simply.body(data[0].text);
});
simply.on('longClick', 'select', function(e) {
  // simply.subtitle('You pressed the ' + e.button + ' button!');
  if(count > 0) {
    count -= 1;
    simply.title(data[1].title + count);
    simply.body(data[1].text);
  }
});
