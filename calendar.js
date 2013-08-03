            var dtemp = new Date();
            var calendar = {
            	 year : parseInt(dtemp.getFullYear()),
            	 month : parseInt(dtemp.getMonth())+1,
            	 day : parseInt(dtemp.getDate()),
            	 monthlastday: 0,
            	 monthfirstday: 0,
            	 timestamp : 0,
                months : new Array ("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"),
                monthsize : new Array (31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31),                        
            }
        
            function calendarleapyear(year){
                var yearpf = parseInt(year)/4;
                if (parseInt(yearpf)*4 ===  parseInt(year)) {
                	  var yearph = parseInt(year)/100;
                	  if (parseInt(yearph)*100 ===  parseInt(year) ) {
                	      var yearpfh = parseInt(year)/400; 
                	      if (parseInt(yearpfh)*400 ===  parseInt(year) ) {
                	          return 1;	
                	      } else {
                	          return 0;
                	      }
                	  } else {
                	      return 1;
                	  }                
                } else {
                   return 0;
                }
            }
            
            function calendarmonthlastday(){            
                if (calendar.month === 2) {
	                 if ( calendarleapyear(calendar.year) === 1){
	                     calendar.monthlastday = 29;
	                 } else {
	                     calendar.monthlastday = 28;
	                 }
	             } else {
	                 calendar.monthlastday = calendar.monthsize[calendar.month-1];
	             }                           
            }


            
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
            calendarrender();
            var d=new Date();
            var d2=new Date("08,04,2013");
            var weekday=new Array(7);
            weekday[0]="Sunday";
            weekday[1]="Monday";
            weekday[2]="Tuesday";
            weekday[3]="Wednesday";
            weekday[4]="Thursday";
            weekday[5]="Friday";
            weekday[6]="Saturday";

            var n = weekday[d2.getDay()]; 
