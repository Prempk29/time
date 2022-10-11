setInterval(()=>{
var prem=document.querySelector(".timemama");
let date=new Date();
let hours=date.getHours();
let minutes=date.getMinutes();
let seconds=date.getSeconds();
var day="AM";
if(hours>12)
{
    day="PM";
    hours=hours-12;
}
if(hours<10)
{
    hours="0"+hours;
}
if(minutes<10)
{
    minutes="0"+minutes;
}
if(seconds<10)
{
    seconds="0"+seconds;
}
prem.textContent=hours+":"+minutes+":"+seconds+" " + day;
});
