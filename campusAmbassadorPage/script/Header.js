var closeButton = document.getElementById('closeImg');

closeButton.addEventListener('click',()=>{
    document.getElementsByClassName('marqueeSection')[0].style.display='none';
    document.getElementsByClassName('academyHeader')[0].style.height='auto';
})