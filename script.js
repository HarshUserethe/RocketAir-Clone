



function show() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
  });



  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();

}
show();


//navigation bar hidden while scrolling

var nav = document.querySelector(".nav");
let lastScrollY = window.scrollY;


window.addEventListener("scroll", ()=>{
if(lastScrollY < window.scrollY){
    nav.classList.add("nav--hidden");
    
}
else{
    nav.classList.remove("nav--hidden");
}

lastScrollY = window.scrollY;
});








var box3 = document.querySelector("#box3");
var overlay = document.querySelector("#overlay");
var overlay2 = document.querySelector("#overlay2");
var motion = document.querySelector("#motion");
var circle = document.querySelector("#box3>.circle");
var box3arrow1 = document.querySelector("#arrow3");
var box3arrow2 = document.querySelector("#arrow3_1");
var box2arrow1 = document.querySelector("#arrow02");
var box2arrow2 = document.querySelector("#arrow2_1");
var box1arrow1 = document.querySelector("#arrow1");
var box1arrow2 = document.querySelector("#arrow2");
var cover = document.querySelector("#cover");
var door1 = document.querySelector("#door1");
var door2 = document.querySelector("#door2");
var door3 = document.querySelector("#door3");
var door4 = document.querySelector("#door4");
var video2 = document.querySelector("#video2");
var vid1 = document.querySelector("#vid1")
var vid2 = document.querySelector("#vid2")



//BOX-3 ANIMATION/EFFECT

box3.addEventListener("mouseenter", function(){
  overlay.style.display = "initial";
  overlay.style.width = "100%"
  motion.style.color = "#000"
  circle.style.backgroundColor = "#000"
  box3arrow1.style.display = "none"
  box3arrow2.style.display = "initial"

 



  
})
box3.addEventListener("mouseleave", function(){
    overlay.style.display = "initial";
    overlay.style.width = "0%"
    overlay.style.transition = "";
    motion.style.color = "#fff"
    box3arrow1.style.display = "initial"
    box3arrow2.style.display = "none"
    
    
    
  })

  box3.addEventListener("mouseenter", function(){
    overlay2.style.display = "initial";
    overlay2.style.width = "100%"
    overlay2.style.transition = "";
     
  })
  box3.addEventListener("mouseleave", function(){
      overlay2.style.display = "initial";
      overlay2.style.width = "0%"
      overlay2.style.transition = "";
    })


//BOX-2 ANIMATION/EFFECT


    box2.addEventListener("mouseenter", function(){
      overlay3.style.display = "initial";
      overlay3.style.width = "100%"
      document.querySelector("#box2>h1").style.color = "#000"
      document.querySelector("#dot").style.display = "none"
       box2arrow1.style.display = "none";
       box2arrow2.style.display = "initial";
       door1.style.padding = "0px 0px 100px 0px"
       door2.style.padding = "0px 0px 100px 0px"
       cover.style.display = "none"
       vid1.style.display ="initial"
       vid2.style.display ="none"
     
    


       
       
    
      

      
       
    })
    box2.addEventListener("mouseleave", function(){
        overlay3.style.display = "initial";
        overlay3.style.width = "0%"
        document.querySelector("#box2>h1").style.color = "#fff"
        document.querySelector("#dot").style.display = "initial"
        box2arrow1.style.display = "initial";
       box2arrow2.style.display = "none";
       door1.style.padding = "50% 25%"
       door2.style.padding = "50% 25%"
       cover.style.display = "initial"
       vid1.style.display ="none"
       vid2.style.display ="initial"
      
     

       
  
         
      })






      //BOX-1 ANIMATION/EFFECT
      box1.addEventListener("mouseenter", function(){
        overlay4.style.display = "initial";
        overlay4.style.width = "100%"
        document.querySelector("#box1>h1").style.color = "#000"
         box1arrow1.style.display = "none";
         box1arrow2.style.display = "initial";
         door1.style.padding = "0px 0px 100px 0px"
         door2.style.padding = "0px 0px 100px 0px"
         cover.style.display = "none"
         vid1.style.display ="none"
         vid2.style.display ="initial"

       
     
         
      
        
  
        
         
      })
      box1.addEventListener("mouseleave", function(){
          overlay4.style.display = "initial";
          overlay4.style.width = "0%"
          document.querySelector("#box1>h1").style.color = "#fff"
         box1arrow1.style.display = "initial";
         box1arrow2.style.display = "none";
         door1.style.padding = "50% 25%"
         door2.style.padding = "50% 25%"
         cover.style.display = "initial"
         vid1.style.display ="initial"
         vid2.style.display ="none"
        
         
         

        
           
        })


        
    

    document.querySelector("#circlebg").addEventListener("mousemove", function(){

    })


    var flag = 0;




    document.querySelector("#left>button").addEventListener("click",function(){
     if(flag === 0){
      document.querySelector("#left>button").style.color = "yellow";
      document.querySelector("#left>button").innerHTML = "Subscribed";
      flag = 1;
     }
     else{
      document.querySelector("#left>button").style.color = "#fff";
      document.querySelector("#left>button").innerHTML = "Subscribe";
      flag = 0;
     }
    })


  //  var videoarea = document.querySelector("#videoarea")
  //  videoarea.addEventListener("mouseenter", function(){
  //   document.querySelector("#movingcircle").style.display = "initial"
  //  })

  //  videoarea.addEventListener("mouseleave", function(){
  //   document.querySelector("#movingcircle").style.display = "none"
  //  })


   //mouse move
  //  $(document).on("click mousemove","body",function(e){ 
  //   var x = e.clientX;
  //   var y = e.clientY;
  //   console.log(newposX)
  //   console.log(newposY)
  //   var newposX = x -400;
  //   var newposY = y -400; $("#movingcircle").css("transform","translate3d("+newposX+"px,"+newposY+"px,0px)");
  //   });

  //  videoarea.addEventListener("mousemove",function(dets){
  //   document.querySelector("#movingcircle").style.top =`${dets.y}px`;
  //   document.querySelector("#movingcircle").style.left =`${dets.x}px`;
    
  //  })



   var path = document.querySelector("#path")
   var minicircle = document.querySelector("#minicircle")

   path.addEventListener("mouseenter", function(){
    minicircle.style.display = "initial"
   })

   path.addEventListener("mouseleave", function(){
    minicircle.style.display = "none"
   })

   path.addEventListener("mousemove", function(dets){
document.querySelector("#minicircle").style.top = `${dets.y/5}px`
document.querySelector("#minicircle").style.left = `${dets.x}px`
 
   })

  
 gsap.from(".row",{
 opacity: 0,
  y: 20,
  duration: 1.5,
  stagger: 0.1,
 })

 gsap.from("#videoarea", {
  y:20,
  duration: 0.8,

 })

 gsap.from(".next>p",{
  y:40,
  opacity: 0,
  duration: 0.5,

  scrollTrigger: {
    trigger: ".next>p",
    scroller: ".main",
     start: "top 90%",
     toggleActions: "restart reverse play none",
    
     
  }
 })
  

 gsap.from("#orbital",{
  y:300,
  duration: 0.5,
  stagger: 0.5,

  scrollTrigger: {
    trigger: "#orbital",
    scroller: ".main",
    toggleActions: "play none play none",
     start: "top 120%",
      
    
     
    
    
  }
 })
  

 gsap.from("#box1",{
  x:-80,
  duration: 0.5,
  scrollTrigger:{
    trigger:"#box1",
    scroller: ".main",
    toggleActions: "restart reverse play none",
    start: "top 85%",

  }

 })

 gsap.from("#box2",{
  x:-160,
  duration: 0.6,
  scrollTrigger:{
    trigger:"#box2",
    scroller: ".main",
    toggleActions: "restart reverse play none",
    start: "top 85%",

  }

 })

 gsap.from("#box3",{
  x:-240,
  duration: 0.7,
  scrollTrigger:{
    trigger:"#box3",
    scroller: ".main",
    toggleActions: "restart reverse play none",
    start: "top 85%",

  }

 })

 gsap.from("#box4",{
  x:-360,
  duration: 0.8,
  scrollTrigger:{
    trigger:"#box4",
    scroller: ".main",
    toggleActions: "restart reverse play none",
    
    start: "top 85%",

  }

 })

 gsap.from("#txtring",{
  
  duration: 4.2,
  rotate: 360,
  repeat: -1,
  ease: Linear.easeNone,

  

 })

 gsap.from("#cont1",{
  opacity: 0,
  y: 40,
  duration: 0.5,
  rotate: -15,

  scrollTrigger: {
    trigger: "#cont1",
    scroller: ".main",
    start: "top 85%",
    toggleActions: "restart reverse play none",

  }
 })

 gsap.from("#work",{
  
  y: 100,
  duration: 0.5,
  rotate: 20,

  scrollTrigger: {
    trigger: "#work",
    scroller: ".main",
    start: "top 70%",
   
    toggleActions: "restart reverse play none",
     

  }
 })

 gsap.from("#frame7>h1",{
  
  y: 100,
  duration: 0.5,
  rotate: 20,

  scrollTrigger: {
    trigger: "#frame7>h1",
    scroller: ".main",
    start: "top 70%",
    toggleActions: "restart reverse play none",

  }
 })


 gsap.from(".lists",{
  
  y: 100,
  duration: 0.5,
  stagger: 0.05,

  scrollTrigger: {
    trigger: ".lists",
    scroller: ".main",
    start: "top 100%",
   
    toggleActions: "restart reverse play reverse",

  }
 })

 
  gsap.to("#s1",{
   top: "-140%",
   duration: 2,

   scrollTrigger: {
     trigger:"#elem",
      scroller: ".main",
     
     start: "top 70%",
     toggleActions: "restart reverse play reverse",
     scrub: true,
     
    
   }
  })

  gsap.to("#mobile-box2",{
    top: "-155%",
    duration: 2,
    delay: 1.5,
 
    scrollTrigger: {
      trigger:"#elem2",
       scroller: ".main",
     
      start: "top 70%",
      toggleActions: "restart reverse play reverse",
      scrub: true,
      
     
    }
   })
   gsap.to("#slideNo3",{
    top: "-80%",
    duration: 2,
    delay: 3,
 
    scrollTrigger: {
      trigger:"#elem3",
       scroller: ".main",
       
      start: "top 70%",
      toggleActions: "restart reverse play reverse",
      scrub: true,
      
     
    }
   })
   


  gsap.to("#s2",{
   top: "450%",
   duration: 1.5,
   delay: 1.5,
   scrollTrigger: {
     trigger:"#elem",
      scroller: ".main",
    
     start: "top 70%",
     toggleActions: "restart reverse play reverse",
     scrub: true,
     
    
   }
  })

 

  gsap.to("#s3",{
   top: "470%",
   duration: 1.5,
   scrollTrigger: {
     trigger:"#elem",
      scroller: ".main",
       
     start: "top 60%",
     end: "bottom top",
     toggleActions: "restart reverse play reverse",
     scrub: true,
     
    
   }
  })


  function dark (){
    
    document.querySelector("#ball4>h3").style.color = "#000";
  }
 
  gsap.to("#ball4",{
    top: "-15%",
    duration: 0.5,
    backgroundColor: 'yellow',
  
    


    scrollTrigger: {
      trigger:"#ball4",
       scroller: ".main",
      start: "top 130%",
      end: "top 60%",
      
       
     toggleClass:"#ball4-red"
    
  
     
     
      
      
     
    }
   })



gsap.to("#ball4>h3",{
   
     duration: 0.2,
    color: "#000",
  
    


    scrollTrigger: {
      trigger:"#ball4>h3",
       scroller: ".main",
   
      start: "top 90%",
      end: "top 60%",
      
       
    
  
     
     
      
      
     
    }
   }) 


   
gsap.to("#frame7",{
   
     
   backgroundColor: "#000",

  scrollTrigger: {
    trigger:"#frame7",
     scroller: ".main",
     
    start: "top 40%",
    end: "top 60%",
   
    
     
    
   
  }
 }) 
  


 gsap.to("#frame7>h1",{
   
     
  color: "#fff",

 scrollTrigger: {
   trigger:"#frame7>h1",
    scroller: ".main",
    
   start: "top 80%",
  
  
   
    
   
  
 }
}) 

 
 


gsap.to("#frame7>h1",{
   
     
  color: "#fff",

 scrollTrigger: {
   trigger:"#frame7>h1",
    scroller: ".main",
    
   start: "top 80%",
 
  
   
    
   
  
 }
}) 

gsap.to("#spline",{
   
     
  backgroundColor: "#fff",

 scrollTrigger: {
   trigger:"#spline",
    scroller: ".main",
    
   start: "top 80%",
 
  
   
    
   
  
 }
}) 

gsap.to("#frame8",{
   
     duration: 0.2,
  backgroundColor: "#000",

 scrollTrigger: {
   trigger:"#frame8",
    scroller: ".main",
   
   start: "top 102%",
 
  
   
    
   
  
 }
}) 

 


var i1 = document.querySelector("#i1");
var i2 = document.querySelector("#i2");
var i3 = document.querySelector("#i3");
var i4 = document.querySelector("#i4");
var i5 = document.querySelector("#i5");
var i6 = document.querySelector("#i6");
var i7 = document.querySelector("#i7");
var i8 = document.querySelector("#i8");
var i9 = document.querySelector("#i9");

 
var mainmenu = document.querySelector("#mainmenu");
var open = document.querySelector("#open");
 

open.addEventListener("click",function(){
  mainmenu.style.right = "0%" 
})


document.querySelector("#mainmenu>i").addEventListener("click",function(){
  mainmenu.style.right = "-38%"
})


 


