document.getElementsByClassName('nav_link')[4].addEventListener('click',()=>{
    document.getElementsByClassName('menu')[0].style.height='100%';
    document.body.style.height="100vh";
     
})

document.getElementsByClassName('closeButton')[0].addEventListener('click',()=>{
    document.getElementsByClassName('menu')[0].style.height='0%'; 
    document.body.style.height="";
      
})

