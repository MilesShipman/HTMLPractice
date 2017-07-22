Date.prototype.getMonthText = function() {
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return months[this.getMonth()];
}

function create_calendar(){
  //Get elements
  var items = document.getElementsByClassName("calendar");
  console.log(items.length);

  //glad date
  var now = new Date();
  var month = now.getMonthText();
  var year = now.getFullYear();
  alert(now.getDay());

  //Create the HTML -- Month
  text = "<div class = 'month'><ul><li class='prev'>&#10094;</li><li class='month_year'>"+month+"<br><span style='font-size:18px'>"+year+"</span></li><li class='next'>&#10095;</li></ul></div>"

  //Table Header
  text = text + "<table><tr><th>Mo</th><th>Tu</th><th>We</th><th>Th</th><th>Fr</th><th>Sa</th><th>Su</th></tr>"


  //End table
  text = text + "</table>";

  //Add to the text
  items[0].innerHTML = text;



}


window.onload = function(){
  window.document.body.onload = create_calendar(); // note removed parentheses
};
