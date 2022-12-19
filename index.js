var btn = document.querySelector(".btn");
btn.addEventListener("click", onClick);

function onClick() {
    // set new date on every button click
    var today = new Date(); 

    var dd = String(today.getDate()).padStart(2, '0'); //2 digits, leading 0 if single digit month
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //2 digits, leading 0 if single digit month, +1 deals with January
    var yyyy = String(today.getFullYear());

    var hour = String(today.getHours()).padStart(2, '0');
    var min = String(today.getMinutes()).padStart(2, '0');
    var secs = String(today.getSeconds()).padStart(2, '0');

    //create a formatted date
    today = mm + "/" + dd + "/" + yyyy 

    function formatTime(hour, min, secs) { //function to format the time (leading zeroes, am/pm)
        if (hour <= 12) {
            return hour + ":" + min + ":" + secs + " AM";
        } else {
            return (hour - 12) + ":" + min + ":" + secs + " PM";
        }
    }

    var time = formatTime(hour, min, secs);



    var dateLocation = document.querySelector(".date").innerHTML = today; //replace HTML elements with the calculated date and time
    var timeLocation = document.querySelector(".time").innerHTML = time;
}
