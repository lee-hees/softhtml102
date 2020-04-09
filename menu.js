var abc1=document.getElementById("menu"); // 메뉴아이콘 id가main임
var abc2=document.getElementById("sub"); // 메뉴안에 내용id가 sub임
var abc3=document.getElementById("op");  // 제목 id 가 op임

abc1.addEventListener('click',meclick);
function meclick(){
    if(abc2.style.display=="none"){
        abc1.style.width="auto";
        abc1.style.left="30%";
        abc1.style.border="solid";
        abc2.style.display="block";
    }
    else{
        abc1.style.width="auto";
        abc1.style.left="auto";
        abc1.style.border="none";
        abc2.style.display="none";
        abc3.style.opacity="1";
    }
}
