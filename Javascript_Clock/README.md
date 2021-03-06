#JavaScript Clock and Date

#Synopsis --

this is a simple JS clock and Calander project i put togethor to keep time on on my website Yusifelawawdeh.com
its two javascript functions in date.js that outputs the date to the div id (dateDisplay) and the current clock 
time to another div id (timeDisplay). so that the date and time can be put on different parts of my portfolio site. 
The code runs in the page when you include the { onload="updateTime();" } attribute in the body tag. it is also important to specify 
which divs with the proper ID attribute in order for the time and date to render in place. I've included some CSS so as to show 
that the clock and calander can be influenced stylisticly with css nothing else, its not required it just looks nice.

to reiterate this simple clock and "calander" is all javascript so it can be copied and put as an inline script or be called from the date.js
file, no need for anything special from css. on requirements are that you specify onload and ID attribute.


#Code Example --

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

#Motivation --

I had a need to impliment The Date and the time seperatly on my portfolio, so i made this Javascript "snippet" if you will, to solve 
that problem. Its available on git hub because, i know its not the prettiest or best coded solution to my problem. However since 
i'm learning and applying things as i go, i figuered i'd let other developers or folks take a look at this code and set me straight 
if ive made any mistakes or if i could have done this project better. 

#Installation -- 

Steps listed below 

Step 1 : download / clone the Repo to desktop

Step 2 : Extract zip or rar

Step 3 : copy date.js to your js folder in your project

Step 4 : open your index.html or other associated html file 

Step 5 : copy and paste the script tag below the end or top of your html doc  

         <script type="text/Javascript" src="js/date.js"></script> 

Step 6 : copy and paste the attribute below into your body tag 
        
        onLoad="updateTime();"

Step 7 : copy and paste the ID below into the tag you want to display date 

        id="dateDisplay"

Step 8: copy and paste the ID below into the tage you want to display time 

        id="timeDisplay"

Step 9: Save Documents, (pray to the overseer it works) and open the html doc in a browser to see if it works 

Step 10: if Script works (thank the overseer) and do a little dance for luck so that nothing in code will be depricated.

-------------- WARNING -------------

if  steps 1 - 10 not make the clock work  its likley either that you missed a step or wrote something incorrect or that 
something is depricated or you did not worship the overseer.

its likely the first thing so take a deep breath and 
check your code. 


#API REFERENCE ---

N/A none here its to basic for a full blown API

#Tests -- 

Simply follow the aformentioned steps under installation and you should be fine.

#License --

MIT 

Copyright 2017 Yusif El-awawdeh

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.






