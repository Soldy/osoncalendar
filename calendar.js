/*
 Simple calendar function
 Oson 2014
 var cd = new osoncalendar(document.getElementById("houseelementid"));

*/


function osoncalendar(mainelement) {
    this.curdate = new Date();
    this.year=parseInt(this.curdate.getFullYear());//this year
    this.month=parseInt(this.curdate.getMonth())+1;
    this.day=parseInt(this.curdate.getDate());
    this.monthlastday=0;
    this.monthfirstday=0;
    this.timestamp=0;
    this.mainel=mainelement;
    this.months=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    this.monthsize=[31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];         
    this.chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    this.ranid="";
    for( var i=0; i < 5; i++ ) this.ranid+= this.chars.charAt(Math.floor(Math.random() * this.chars.length));
    this.leapYear= function (year){// year check leap or not ? 
         var yearpf = parseInt(year)/4;
         if (parseInt(yearpf)*4 !==  parseInt(year)) return 0;
         var yearph = parseInt(year)/100;
         if (parseInt(yearph)*100 !==  parseInt(year))return 1;
         var yearpfh = parseInt(year)/400; 
         if (parseInt(yearpfh)*400 ===  parseInt(year)) return 1;	
         return 0;                	 
     }

     this.monthLastDay = function(){// give back the mont size         
         if (t.month !== 2) return t.monthsize[inpmonth-1]; //check the month february or not. 
         if (t.leapYear(t.year) === 1) return 29;
         return 28;
     }
     this.makemonths=function(){
         var outhtml ="";
         var monum =0 ;
         for (ia=0;3>ia;ia++) {
             outhtml +="<div class='osoncalendarmonscol'>";
             for (ib=0;4>ib;ib++) {
                 monum++;
                 outhtml+="<div class='osoncalendarmonscub' onclick='calendarmontchan("+monum.toString()+")'>"+t.months[monum-1]+"</div>";
              }
              outhtml +="</div>";
         }
         t.mainel.innerHTML = outhtml;
     }
     this.makedays=function(){
         var outhtml = "<div class='osoncalendardayname'><div class='osoncalendardaycube'>Su</div><div class='osoncalendardaycube'>Mo</div><div class='osoncalendardaycube'>Tu</div><div class='osoncalendardaycube'>We</div><div class='osoncalendardaycube'>Th</div><div class='osoncalendardaycube'>Fr</div><div class='osoncalendardaycube'>Sa</div></div><div class='osoncalendardays'>" ;
         var wstart = 0;
         var d2=new Date(t.month.toString()+",01,"+t.year.toString());
         var dateday = d2.getDay();
         var monthday = 0;                      
         for (ia=1;7>ia;ia++){
             outhtml+="<div class='osoncalendardaysline'>";
             for (ib=0;7>ib;ib++){
                 if ((wstart === 0) && (dateday === ib)) {
                     wstart = 1;
                 }
                 if ((wstart === 1) && (t.monthlastday > monthday)) {
                     monthday+=1;
                     if (monthday === t.day){
                         outhtml+="<div class='osoncalendardayscube osoncalendardayscubea osoncalendardayscubeas' id='"+t.ranid+"monthday"+monthday.toString()+"'>"+monthday.toString()+"</div>";
                     } else {
                         outhtml+="<div class='osoncalendardayscube osoncalendardayscubea' id='"+t.ranid+"calendarmonthday"+monthday.toString()+"' onclick='calendardaychan("+monthday.toString()+");'>"+monthday.toString()+"</div>";
                     }
                 } else {
                     outhtml+="<div class='osoncalendardayscube'></div>";
                 }
             }
             outhtml+="</div>";
         }
         outhtml+="</div>";
         t.mainel.innerHTML = outhtml;
     }
     this.daywrite=function(){
         var outh = t.day.toString();
         if (10>t.day){
             outh = "0"+outh;
         }
         document.getElementById(t.ranid+"headday").innerHTML = outh;
     }
     this.daychan=function(nd){
         t.day=nd;
	     t.render();
     }      
     this.daym=function(){// date month day minus 1
         t.day--;
	     if (1 > t.day){
             t.monthm();
             t.day = t.monthlastday;                   
	     }
	     t.render();
     }
     t.dayp=function(){// date + one day
         t.day++;
	     if (t.day>t.monthlastday){
	         t.day = 1;
             t.monthp();                    
	     } else {
	         t.render(); 
         }
     }     
     this.montchan=function(nd){// change month
         t.month=nd;
	     t.render();
     }
     this.monthwrite=function(){//write month 
         document.getElementById(t.ranid+"headmonth").innerHTML = t.months[t.month-1];
     }
     this.monthm=function(){
         t.month--;
	     if (1>t.month) {
	         t.month = 12;
	         t.yearm();
         }else{
             t.render();
         }
     }
     this.monthp=function(){
         t.month++;
	     if (t.month>12) {
	         t.month = 1;
	         t.yearp();
         } else {
             t.render();
         }
     }
     this.yearwrite(){
          document.getElementById(t.ranid+"headyear").innerHTML = t.year.toString();
     }
     this.yearm() {
	     t.year = t.year - 1;
         t.render();
     }
     this.yearp() {
         t.year = t.year + 1;
	     t.render();
     }
     this.render(){
         t.monthlastday();
         t.daywrite();
         t.monthwrite();
         t.yearwrite();
         t.makedays();            
     }
     var t=this;
}
