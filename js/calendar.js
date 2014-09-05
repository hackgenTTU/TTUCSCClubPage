function calendar() {
	

	var d = new Date();
	var firstDate = new Date(d.getFullYear(), d.getMonth(), 1);
	var monthArray = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
	var month = monthArray[d.getMonth()];

	var monthStart = firstDate;
	var monthEnd = new Date(d.getFullYear(), d.getMonth()+ 1, 1);
	var monthLength = (monthEnd - monthStart) / (1000 * 60 * 60 * 24);

	var calendar = document.getElementsByClassName('box calendar')[0].firstElementChild;

	var calendarWeek="<thead><tr><th scope='col' title='Monday'>M</th><th scope='col' title='Tuesday'>T</th><th scope='col' title='Wednesday'>W</th><th scope='col' title='Thursday'>T</th><th scope='col' title='Friday'>F</th><th scope='col' title='Saturday'>S</th><th scope='col' title='Sunday'>S</th></tr></thead>";
	var calendarTable="<table> <caption>"+month+d.getFullYear()+"</caption> "+calendarWeek+"<tbody>"+"<tr><td colspan="+firstDate.getDay()+" class='pad'><span>&nbsp;</span></td>";
	var w=firstDate.getDay;
	var date=1;

	for ( ; date<=monthLength; date++,w++) {
		if(w==7){
			calendarTable+="</tr>";
			w=0;
		}
		if(date!=d.getDate()){
			calendarTable+="<td><span>"+date+"</span></td>";
		}else{
			calendarTable+="<td><span class='today'>"+date+"</span></td>";
		}
	}
	calendarTable+="<td class='pad' colspan="+((7-w)%7)+"><span>&nbsp;</span></td></tbody></table>";

	calendar.innerHTML=calendarTable;
}	