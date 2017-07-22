Date.prototype.getMonthText = function() {
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return months[this.getMonth()];
}

calendarDays = Array(42).fill(0);

function create_calendar(){
  //Get elements
  var items = document.getElementsByClassName("calendar");
  console.log(items.length);

  //glad date
  var now = new Date();
  var month = now.getMonthText();
  var year = now.getFullYear();
  var firstDay = new Date(year,now.getMonth(),1);
  var days = new Date(year, now.getMonth(),0);
  //alert(firstDay.getDay());

  //Create the HTML -- Month
  text = "<div class = 'month'><ul><li class='prev'>&#10094;</li><li class='month_year'>"+month+"<br><span style='font-size:18px'>"+year+"</span></li><li class='next'>&#10095;</li></ul></div>"

  //Table Header
  text = text + "<table><tr><th>Mo</th><th>Tu</th><th>We</th><th>Th</th><th>Fr</th><th>Sa</th><th>Su</th></tr>"

  //Fill Array
  for(i = 0; i < days.getDate(); i++){
    //console.log(i);
    calendarDays[i+firstDay.getDay()] = i + 1;
  }

  days_text = " ";
  for(i=0; i < calendarDays.length; i++){
    if( i % 7 == 0){
      days_text = days_text + "<tr>";
    }
    console.log("Test");
    //add the space
    if(calendarDays[i] == 0){
      days_text = days_text + "<td class='day'></td>";
    }
    else{
      console.log(calendarDays[i]);
       days_text = days_text + "<td class='day'>" + calendarDays[i] + "</td>";
      //days_text = days_text + "<td class='day>"+calendarDays[i] +"</td>";
    }
    //days_text = days_text + "<td>test</td>";

   console.log(i%7);
    if( i % 7 == 6){
      days_text = days_text + "</tr>";
    }
    
  }

  console.log(calendarDays);

  //End table
  text = text + days_text + "</table>";

  //Add to the text
  items[0].innerHTML = text;



}


window.onload = function(){
  window.document.body.onload = create_calendar(); // note removed parentheses
};
