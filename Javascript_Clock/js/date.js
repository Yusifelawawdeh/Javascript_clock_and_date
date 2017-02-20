function updateTime(){

//Date year - month - day 
var myDate = new Date();
var year = myDate.getFullYear();
var month = myDate.getMonth();
var day = myDate.getDay();
var daym = myDate.getDate();
var dayarray = new Array ('Sunday', 'Monday','Tuesday','Wednesday','Thursday','Friday','Saturday');
var montharray = new Array ('January','Febuary','March','April','May','June','July','August','September','October','November','December');
//Date year - month - day

// Hour - Minute - Second
var myTime = new Date();
var hour = myTime.getHours();
var minute = myTime.getMinutes();
var second = myTime.getSeconds();
hour = checkTime(hour);
minute = checkTime(minute);
second = checkTime(second);    
// now is 24 hour clock 


// current spliced togethor
var currentDate = '' + dayarray[day] + ' ' + daym + ' ' + montharray[month] + ' ' + year;
// current 24hr spliced togethor
var currentTime = setTimeout(updateTime, 500);  


//get date div
var myClock = document.getElementById('dateDisplay');
//get time div
var myWatch = document.getElementById('timeDisplay').innerHTML = hour + ':' + minute + ':' + second;


//write current date as string to div 
myClock.innerHTML = currentDate;


}
function checkTime(i){
    if (i < 10) {i = "0" + i}; // adds a 0 infront of numbers less than 10
    return i;
}
