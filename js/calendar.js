Date.prototype.getMonthText = function() {
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return months[this.getMonth()];
}

calendarDays = Array(42).fill(0);

date = new Date()


function setup(){
  //Create Calendar if it exists
  var items = document.getElementsByClassName("calendar");
  if(items.length > 0){
    initial_calendar_create();
  }
}

function initial_calendar_create(){
  //Get the Current Day and set the new month
  var firstDay = new Date(date.getFullYear(), date.getMonth(),1);
  date = firstDay;

  create_calendar();
}

function create_calendar(){
  //Reset Array
  reset_days();

  //Get elements
  var items = document.getElementsByClassName("calendar");
  console.log(items.length);

  //Get the Number of days
  var month = date.getMonthText();
  var year = date.getFullYear();
  var days = new Date(year, date.getMonth(),0);

  //Create the HTML -- Month
  text = "<div class = 'month'><ul><li class='prev' onclick='prev_month();''>&#10094;</li><li class='month_year'>"+month+"<br><span style='font-size:18px'>"+year+"</span></li><li class='next' onclick='next_month()'>&#10095;</li></ul></div>"

  //Table Header
  text = text + "<table><tr><th>Mo</th><th>Tu</th><th>We</th><th>Th</th><th>Fr</th><th>Sa</th><th>Su</th></tr>"

  //Fill Array
  for(i = 0; i < days.getDate(); i++){
    //console.log(i);
    calendarDays[i+date.getDay()] = i + 1;
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
       days_text = days_text + "<td class='day' id='day"+ calendarDays[i] +"'>" + calendarDays[i] + "</td>";
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

function reset_days(){
  calendarDays = Array(42).fill(0);
}

function next_month(){
  //alert("Next Month");
  date.setMonth(date.getMonth() + 1);
  create_calendar();
}

function prev_month(){
  //alert("Prev Month");
  date.setMonth(date.getMonth() - 1);
  create_calendar();
}





window.onload = function(){
  window.document.body.onload = setup(); // note removed parentheses
};
