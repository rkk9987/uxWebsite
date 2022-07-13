Array.from(document.getElementsByClassName('serviceLink')).forEach((element)=>{
    element.addEventListener('click',()=>{
        location.href="../../OurServices/ourServices.html";
    })
})