

window.addEventListener("scroll",reveal);

function reveal() {
    var ousServices = document.getElementsByClassName("ourServices")[0];
     var recentclientcontainer= document.getElementsByClassName('clientheading')[0];
    var clientcard1= document.getElementsByClassName('ourclientcard')[0];
    // var clientcard2= document.getElementsByClassName('clientcard2')[0];
    // var clientcard3= document.getElementsByClassName('clientcard3')[0];

    var rowcardSection1= document.getElementsByClassName('rowcardSection1')[0];

    var greet_heading= document.getElementsByClassName('greet_heading')[0];
    var conversation_heading= document.getElementsByClassName('conversation_heading')[0];
    var enquiry_cards= document.getElementsByClassName('enquiry_cards')[0];

    var ourServices_head=document.getElementsByClassName('ourServices_head')[0];
    var ourServices_summary=document.getElementsByClassName('ourServices_summary')[0];

    
    var words_section = document.getElementsByClassName('words_section')[0];
    var carousel_part = document.getElementsByClassName('carousel_part')[0];

    var text_part= document.getElementById('text_part');

      var windowHeight = window.innerHeight;


      var elementTop = ousServices.getBoundingClientRect().top;
      var recentclientcontainertop=recentclientcontainer.getBoundingClientRect().top;


      var clientcard1top=clientcard1.getBoundingClientRect().top;

       var rowcardSection1top = rowcardSection1.getBoundingClientRect().top;


       var words_sectiontop=words_section.getBoundingClientRect().top;
      var carousel_parttop=carousel_part.getBoundingClientRect().top;

      var greet_headingtop=greet_heading.getBoundingClientRect().top;
      var conversation_headingtop=conversation_heading.getBoundingClientRect().top;
      var enquiry_cardstop=enquiry_cards.getBoundingClientRect().top;

       var ourServices_headtop= ourServices_head.getBoundingClientRect().top;
     var ourServices_summarytop= ourServices_summary.getBoundingClientRect().top;


      var text_parttop= text_part.getBoundingClientRect().top;

      var elementVisible = 100;


      if (elementTop < windowHeight - elementVisible) {
        ousServices.classList.add("active");
      } else {
        ousServices.classList.remove("active");
      }
    
    // if (recentclientcontainertop< windowHeight - elementVisible) {
    //     recentclientcontainer.classList.add("active");
    //   } else {
    //     recentclientcontainer.classList.remove("active");
    //   }

    

      if (clientcard1top< windowHeight - elementVisible) {
        clientcard1.classList.add("active");
      } else {
        clientcard1.classList.remove("active");
      }


        // client section ---------------------------------------------------


      // if (clientcard2top< windowHeight - elementVisible) {
      //   clientcard2.classList.add("active");
      // } else {
      //   clientcard2.classList.remove("active");
      // }


      // if (clientcard3top< windowHeight - elementVisible) {
      //   clientcard3.classList.add("active");
      // } else {
      //   clientcard3.classList.remove("active");
      // }

      // -------------------------------------------------------------------------  



      // section 6***************************************

      // if (greet_headingtop< windowHeight - elementVisible) {
      //   greet_heading.classList.add("active");
      // } else {
      //   greet_heading.classList.remove("active");
      // }


      // if (conversation_headingtop< windowHeight - elementVisible) {
      //   conversation_heading.classList.add("active");
      // } else {
      //   conversation_heading.classList.remove("active");
      // }

      // ********************************************************************** 


      
      if (enquiry_cardstop< windowHeight - elementVisible) {
        enquiry_cards.classList.add("active");
      } else {
        enquiry_cards.classList.remove("active");
      }

      if ( ourServices_headtop< windowHeight - elementVisible) {
        ourServices_head.classList.add("active");
      } else {
        ourServices_head.classList.remove("active");
      }

      if (ourServices_summarytop< windowHeight - elementVisible) {
        ourServices_summary.classList.add("active");
      } else {
        ourServices_summary.classList.remove("active");
      }

      if ( text_parttop< windowHeight -50) {
        text_part.classList.add("text_partActive");
      } else {
        text_part.classList.remove("text_partActive");
      }


      if ( words_sectiontop< windowHeight -50) {
        words_section.classList.add("carouselActive");
      } else {
        words_section.classList.remove("carouselActive");
      } 


      // if ( carousel_parttop< windowHeight -elementVisible) {
      //   carousel_part.classList.add("carouselActive");
      // } else {
      //   carousel_part.classList.remove("carouselActive");
      // }
      rowcardSection1


      if (rowcardSection1top< windowHeight - elementVisible) {
        rowcardSection1.classList.add("storiesActive");
      } else {
        rowcardSection1.classList.remove("storiesActive");
      }

      Array.from(document.getElementsByClassName('about_services')).forEach((element)=>{
        var about_servicestop= element.getBoundingClientRect().top;
        if (about_servicestop< windowHeight - elementVisible) {
            element.classList.add("active");
          } else {
            element.classList.remove("active");
          }
      })

  }