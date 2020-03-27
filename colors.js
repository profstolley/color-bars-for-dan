// Grab the list that will hold all the colored items
var ds = document.getElementById('dois');

// Create 5000 randomly colored list items
for (var i = 0; i < 5000; i++) {
  // Create a new list item to append to ul#dois
  var li = document.createElement('li');
  // Randomly generate a valid hex color value
  var rand_hex_color = '#'+Math.floor(Math.random()*16777215).toString(16);
  // set the background color right on the new <li> element
  // inline styles generally are worth avoiding, but in this
  // data-driven context, they make sense
  li.style = "background: " + rand_hex_color;
  // append the element to ul#dois
  ds.append(li);
}
