var localStorage = window.localStorage;

var one=document.getElementById("one");
var two=document.getElementById("two");
var three=document.getElementById("three");


var arr1=new Array(
    'black',
    'white');
function a(){
    console.log("active");
    if((localStorage.getItem("1호선 1번째 칸"))=="1")
    {
        if((localStorage.getItem("1호선 2번째 칸"))=="1")
        {
            if((localStorage.getItem("1호선 3번째 칸"))=="1")
            {
                one.style.backgroundColor="red";
                one.innerHTML="1 - 혼잡";
                one.style.textAlign="center";
                one.style.fontSize="50";
                one.style.fontWeight="bold";
            }
            else
            {
                one.style.background="yellow";
                one.innerHTML="1 - 보통";
                one.style.textAlign="center";
                one.style.fontSize="50";
                one.style.fontWeight="bold";
            }
        }
        else
        {
            if((localStorage.getItem("1호선 3번째 칸"))=="1")
            {
                one.style.background="yellow";
                one.innerHTML="1 - 보통";
                one.style.textAlign="center";
                one.style.fontSize="50";
                one.style.fontWeight="bold";
            }
            else
            {
                one.style.background="yellow";
                one.innerHTML="1 - 보통";
                one.style.textAlign="center";
                one.style.fontSize="50";
                one.style.fontWeight="bold";
            }
        }
    }
    else
    {
        if((localStorage.getItem("1호선 2번째 칸"))=="1")
        {
            if((localStorage.getItem("1호선 3번째 칸"))=="1")
            {
                one.style.background="yellow";
                one.innerHTML="1 - 보통";
                one.style.textAlign="center";
                one.style.fontSize="50";
                one.style.fontWeight="bold";
            }
            else
            {
                one.style.background="yellow";
                one.innerHTML="1 - 보통";
                one.style.textAlign="center";
                one.style.fontSize="50";
                one.style.fontWeight="bold";
            }
        }
        else
        {
            if((localStorage.getItem("1호선 3번째 칸"))=="1")
            {
                one.style.background="yellow";
                one.innerHTML="1 - 보통";
                one.style.textAlign="center";
                one.style.fontSize="50";
                one.style.fontWeight="bold";
            }
            else
            {
                one.style.background="green";
                one.innerHTML="1 - 원활";
                one.style.textAlign="center";
                one.style.fontSize="50";
                one.style.fontWeight="bold";
            }
        }
    }


    if((localStorage.getItem("2호선 1번째 칸"))=="1")
    {
        if((localStorage.getItem("2호선 2번째 칸"))=="1")
        {
            if((localStorage.getItem("2호선 3번째 칸"))=="1")
            {
                two.style.backgroundColor="red";
                two.innerHTML="2 - 혼잡";
                two.style.textAlign="center";
                two.style.fontSize="50";
                two.style.fontWeight="bold";
            }
            else
            {
                two.style.background="yellow";
                two.innerHTML="2 - 보통";
                two.style.textAlign="center";
                two.style.fontSize="50";
                two.style.fontWeight="bold";
            }
        }
        else
        {
            if((localStorage.getItem("2호선 3번째 칸"))=="1")
            {
                two.style.background="yellow";
                two.innerHTML="2 - 보통";
                two.style.textAlign="center";
                two.style.fontSize="50";
                two.style.fontWeight="bold";
            }
            else
            {
                two.style.background="yellow";
                two.innerHTML="2 - 보통";
                two.style.textAlign="center";
                two.style.fontSize="50";
                two.style.fontWeight="bold";
            }
        }
    }
    else
    {
        if((localStorage.getItem("2호선 2번째 칸"))=="1")
        {
            if((localStorage.getItem("2호선 3번째 칸"))=="1")
            {
                two.style.background="yellow";
                two.innerHTML="2 - 보통";
                two.style.textAlign="center";
                two.style.fontSize="50";
                two.style.fontWeight="bold";
            }
            else
            {
                two.style.background="yellow";
                two.innerHTML="2 - 보통";
                two.style.textAlign="center";
                two.style.fontSize="50";
                two.style.fontWeight="bold";
            }
        }
        else
        {
            if((localStorage.getItem("2호선 3번째 칸"))=="1")
            {
                two.style.background="yellow";
                two.innerHTML="2 - 보통";
                two.style.textAlign="center";
                two.style.fontSize="50";
                two.style.fontWeight="bold";
            }
            else
            {
                two.style.background="green";
                two.innerHTML="2 - 원활";
                two.style.textAlign="center";
                two.style.fontSize="50";
                two.style.fontWeight="bold";
            }
        }
    }


    if((localStorage.getItem("3호선 1번째 칸"))=="1")
    {
        if((localStorage.getItem("3호선 2번째 칸"))=="1")
        {
            if((localStorage.getItem("3호선 3번째 칸"))=="1")
            {
                three.style.backgroundColor="red";
                three.innerHTML="3 - 혼잡";
                three.style.textAlign="center";
                three.style.fontSize="50";
                three.style.fontWeight="bold";
            }
            else
            {
                three.style.background="yellow";
                three.innerHTML="3 - 보통";
                three.style.textAlign="center";
                three.style.fontSize="50";
                three.style.fontWeight="bold";
            }
        }
        else
        {
            if((localStorage.getItem("3호선 3번째 칸"))=="1")
            {
                three.style.background="yellow";
                three.innerHTML="3 - 보통";
                three.style.textAlign="center";
                three.style.fontSize="50";
                three.style.fontWeight="bold";
            }
            else
            {
                three.style.background="yellow";
                three.innerHTML="3 - 보통";
                three.style.textAlign="center";
                three.style.fontSize="50";
                three.style.fontWeight="bold";
            }
        }
    }
    else
    {
        if((localStorage.getItem("3호선 2번째 칸"))=="1")
        {
            if((localStorage.getItem("3호선 3번째 칸"))=="1")
            {
                three.style.background="yellow";
                three.innerHTML="3 - 보통";
                three.style.textAlign="center";
                three.style.fontSize="50";
                three.style.fontWeight="bold";
            }
            else
            {
                three.style.background="yellow";
                three.innerHTML="3 - 보통";
                three.style.textAlign="center";
                three.style.fontSize="50";
                three.style.fontWeight="bold";
            }
        }
        else
        {
            if((localStorage.getItem("3호선 3번째 칸"))=="1")
            {
                three.style.background="yellow";
                three.innerHTML="3 - 보통";
                three.style.textAlign="center";
                three.style.fontSize="50";
                three.style.fontWeight="bold";
            }
            else
            {
                three.style.background="green";
                three.innerHTML="3 - 원활";
                three.style.textAlign="center";
                three.style.fontSize="50";
                three.style.fontWeight="bold";
            }
        }
    }

}
setInterval(a, 0.1);