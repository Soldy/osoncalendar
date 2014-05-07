function calendar() {
    this.curdate = new Date();
    this.year=parseInt(this.curdate.getFullYear());//this year
    this.month=parseInt(this.curdate.getMonth())+1;
    this.day=parseInt(this.curdate.getDate());
    this.monthlastday=0;
    this.monthfirstday=0;
    this.timestamp=0;
    this.months=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    this.monthsize=[31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];         

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
         if (this.month !== 2) return this.monthsize[inpmonth-1]; //check the month february or not. 
         if (this.leapYear(this.year) === 1) return 29;
         return 28;
     }

     
}

/*
            
            function calendarmakemonths(){
            	 var outhtml ="";
            	 var monum =0 ;
                for (ia=0;3>ia;ia++) {
                    outhtml +="<div class='osoncalendarmonscol'>";
                    for (ib=0;4>ib;ib++) {
                    	   monum++;
                        outhtml+="<div class='osoncalendarmonscub' onclick='calendarmontchan("+monum.toString()+")'>"+calendar.months[monum-1]+"</div>";
                    }
                    outhtml +="</div>";
                }
                document.getElementsByClassName("osoncalendarbody")[0].innerHTML = outhtml;
            }

            function calendarmakedays(){
            	 var outhtml = "<div class='osoncalendardayname'><div class='osoncalendardaycube'>Su</div><div class='osoncalendardaycube'>Mo</div><div class='osoncalendardaycube'>Tu</div><div class='osoncalendardaycube'>We</div><div class='osoncalendardaycube'>Th</div><div class='osoncalendardaycube'>Fr</div><div class='osoncalendardaycube'>Sa</div></div><div class='osoncalendardays'>" ;
            	 var wstart = 0;
                var d2=new Date(calendar.month.toString()+",01,"+calendar.year.toString());
            	 var dateday = d2.getDay();
            	 var monthday = 0;                      
            	 for (ia=1;7>ia;ia++){
                    outhtml+="<div class='osoncalendardaysline'>";
                    for (ib=0;7>ib;ib++){
                    	   if ((wstart === 0) && (dateday === ib)) {
                    	       wstart = 1;
                    	   }
                        if ((wstart === 1) && (calendar.monthlastday > monthday)) {
                        	 monthday+=1;
                        	 if ( monthday === calendar.day){
                        	     outhtml+="<div class='osoncalendardayscube osoncalendardayscubea osoncalendardayscubeas' id='calendarmonthday"+monthday.toString()+"'>"+monthday.toString()+"</div>";
                        	 } else {
                                outhtml+="<div class='osoncalendardayscube osoncalendardayscubea' id='calendarmonthday"+monthday.toString()+"' onclick='calendardaychan("+monthday.toString()+");'>"+monthday.toString()+"</div>";
                            }
                        } else {
                            outhtml+="<div class='osoncalendardayscube'></div>";
                        }
                    }
                    outhtml+="</div>";
                }
                outhtml+="</div>";
                document.getElementsByClassName("osoncalendarbody")[0].innerHTML = outhtml;
            }
            function calendardaywrite(){
            	 var outh = calendar.day.toString();
            	 if (10>calendar.day){
                    outh = "0"+outh;
                }
                document.getElementById("osoncalendarheadday").innerHTML = outh;
            }
            function calendardaychan(nd){
            	 calendar.day=nd;
	             calendarrender();
            }            
            function calendardaym(){
            	 calendar.day--;
	             if (1 > calendar.day){
                    calendarmonthm();
                    calendar.day = calendar.monthlastday;                   
	             }
	             calendarrender();
            }
            function calendardayp() {
            	 calendar.day++;
	             if (calendar.day>calendar.monthlastday){
	             	  calendar.day = 1;
                    calendarmonthp();                    
	             } else {
	                 calendarrender(); 
                }
            }
            function calendarmontchan(nd){
            	 calendar.month=nd;
	             calendarrender();
            } 
            function calendarmonthwrite(){
                document.getElementById("osoncalendarheadmonth").innerHTML = calendar.months[calendar.month-1];
            }
            function calendarmonthm() {
            	 calendar.month--;
	             if (1>calendar.month) {
	                 calendar.month = 12;
	                 calendaryearm();
                } else {
                   calendarrender();
                }
            }
            function calendarmonthp() {
            	 calendar.month++;
	             if (calendar.month>12) {
	                 calendar.month = 1;
	                 calendaryearp();
                } else {
                   calendarrender();
                }
            }
        
            function calendaryearwrite(){
                 document.getElementById("osoncalendarheadyear").innerHTML = calendar.year.toString();
            }
            function calendaryearm() {
	             calendar.year = calendar.year - 1;
                calendarrender();
            }
            function calendaryearp() {
            	 calendar.year = calendar.year + 1;
	             calendarrender();
            }

            function calendarrender(){
                calendarmonthlastday();
                calendardaywrite();
                calendarmonthwrite();
                calendaryearwrite();
                calendarmakedays();            
            }
*/