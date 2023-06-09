var scrollBtn = document.querySelector('.scroll');


window.onscroll=function(){
    if(window.pageYOffset>200){
        scrollBtn.style.display='inline-block';
    }
    else{
        scrollBtn.style.display='none'
    }
}

scrollBtn.onclick=function(){
    window.scrollTo({
        top:0,
        behavior:'smooth'
    });
}