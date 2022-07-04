let input = document.getElementById("inp");
var text = document.getElementById("text");
input.addEventListener("blur", timeFunction);

function timeFunction(){
    let inputTime = document.getElementById("inp").value;
    let timee = new Date(inputTime);
    let currentTime = new Date();
    let final = currentTime - timee;
    let second = Math.round(final/1000);
    let minute = Math.round(final/60000);
    let hour = Math.round(final/3600000);
    let day = Math.round(final/86400000);
    if(second < 30){
        text.innerText = second + " Sec ago";
    };
    if(second > 30){
        text.innerText = minute + " Min ago";
    };
    if(hour > 0 && minute > 59){
        text.innerText = hour + " Hour ago";
    };
    if(day > 0){
        text.innerText = day + " Day ago";
    };
};