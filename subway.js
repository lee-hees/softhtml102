var localStorage = window.localStorage;

var div1m1m1=document.getElementById("div1-1-1");
var div1m1m2=document.getElementById("div1-1-2");
var div1m1m3=document.getElementById("div1-1-3");

var div2m1m1=document.getElementById("div2-1-1");
var div2m1m2=document.getElementById("div2-1-2");
var div2m1m3=document.getElementById("div2-1-3");

var div3m1m1=document.getElementById("div3-1-1");
var div3m1m2=document.getElementById("div3-1-2");
var div3m1m3=document.getElementById("div3-1-3");


var arr1=new Array(
    'black',
    'white');
function a(){
    console.log("active");
    div1m1m1.style.background=randomItem(arr1);
    div1m1m2.style.background=randomItem(arr1);
    div1m1m3.style.background=randomItem(arr1);

    div2m1m1.style.background=randomItem(arr1);
    div2m1m2.style.background=randomItem(arr1);
    div2m1m3.style.background=randomItem(arr1);

    div3m1m1.style.background=randomItem(arr1);
    div3m1m2.style.background=randomItem(arr1);
    div3m1m3.style.background=randomItem(arr1);

    if(div1m1m1.style.background=="black")
    { localStorage.setItem("1호선 1번째 칸", "1");}
    else
    {localStorage.setItem("1호선 1번째 칸", "0");}
    if(div1m1m2.style.background=="black")
    { localStorage.setItem("1호선 2번째 칸", "1");}
    else
    {localStorage.setItem("1호선 2번째 칸", "0");}
    if(div1m1m3.style.background=="black")
    { localStorage.setItem("1호선 3번째 칸", "1");}
    else
    {localStorage.setItem("1호선 3번째 칸", "0");}

    if(div2m1m1.style.background=="black")
    { localStorage.setItem("2호선 1번째 칸", "1");}
    else
    {localStorage.setItem("2호선 1번째 칸", "0");}
    if(div2m1m2.style.background=="black")
    { localStorage.setItem("2호선 2번째 칸", "1");}
    else
    {localStorage.setItem("2호선 2번째 칸", "0");}
    if(div2m1m3.style.background=="black")
    { localStorage.setItem("2호선 3번째 칸", "1");}
    else
    {localStorage.setItem("2호선 3번째 칸", "0");}

    if(div3m1m1.style.background=="black")
    { localStorage.setItem("3호선 1번째 칸", "1");}
    else
    {localStorage.setItem("3호선 1번째 칸", "0");}

    if(div3m1m2.style.background=="black")
    { localStorage.setItem("3호선 2번째 칸", "1");}
    else
    {localStorage.setItem("3호선 2번째 칸", "0");}

    if(div3m1m3.style.background=="black")
    { localStorage.setItem("3호선 3번째 칸", "1");}
    else
    {localStorage.setItem("3호선 3번째 칸", "0");}

}
function b(){
    console.log("active")
    div1.style.background="red";
}
function randomItem(a) {
    return a[Math.floor(Math.random() * a.length)];
}
setInterval(a, 1000);