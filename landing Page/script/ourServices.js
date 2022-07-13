
var viewMore=document.getElementsByClassName('view_more_cls');
var viewLess=document.getElementsByClassName('view_less_cls');

viewLess[0].addEventListener('click',()=>{
    Array.from(document.getElementsByClassName('listItems1')).forEach((element)=>{
               element.style.display="none";
               viewLess[0].style.display="none";
               viewMore[0].style.display="flex";
    })
})

viewMore[0].addEventListener('click',()=>{
    Array.from(document.getElementsByClassName('listItems1')).forEach((element)=>{
               element.style.display="revert";
               viewLess[0].style.display="flex";
               viewMore[0].style.display="none";
    })
})

viewLess[1].addEventListener('click',()=>{
    Array.from(document.getElementsByClassName('listItems2')).forEach((element)=>{
               element.style.display="none";
               viewMore[1].style.display="flex";
               viewLess[1].style.display="none";
    })
})

viewMore[1].addEventListener('click',()=>{
    Array.from(document.getElementsByClassName('listItems2')).forEach((element)=>{
               element.style.display="revert";
               viewMore[1].style.display="none";
               viewLess[1].style.display="flex";
    })
})
viewLess[2].addEventListener('click',()=>{
    Array.from(document.getElementsByClassName('listItems3')).forEach((element)=>{
               element.style.display="none";
               viewMore[2].style.display="flex";
               viewLess[2].style.display="none";
    })
})

viewMore[2].addEventListener('click',()=>{
    Array.from(document.getElementsByClassName('listItems3')).forEach((element)=>{
               element.style.display="revert";
               viewMore[2].style.display="none";
               viewLess[2].style.display="flex";
    })
})