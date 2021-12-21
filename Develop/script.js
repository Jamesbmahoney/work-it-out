function dateTime() {
    var myDate = new Date();
    var year = myDate.getYear();
    if (year < 1000) {
        year += 1900
    }
    var day = myDate.getDay();
    var month = myDate.getMonth();
    var daym = myDate.getDate();
    var dayArray = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday");
    var monthArray = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",);

    var currentTime = new Date();
    var h = currentTime.getHours();
    var m = currentTime.getMinutes();
    var s = currentTime.getSeconds();
    if (h == 24) {
        h = 0;
    } else if (h > 12) {
        h = h - 12;
    }

    if (h < 10) {
        h = "0" + h;
    }

    if (m < 10) {
        m = "0" + m;
    }
    if (s < 10) {
        s = "0" + s;
    }

    var myDate = document.getElementById("currentDay");
    myDate.textContent = "" + dayArray[day] + " " + daym + " " + monthArray[month] + " " + year + " | " + h + ":" + m + ":" + s;
    myDate.innerText = "" + dayArray[day] + " " + daym + " " + monthArray[month] + " " + year + " | " + h + ":" + m + ":" + s;

    setTimeout("dateTime()", 1000);
}

dateTime();