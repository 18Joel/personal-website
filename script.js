const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const line1 = document.querySelector('.line1');
    const line2 = document.querySelector('.line2');
    const line3 = document.querySelector('.line3');

    burger.addEventListener('click',()=> {
      nav.classList.toggle('nav-active');
      line1.classList.toggle('line1-active');
      line2.classList.toggle('line2-active');
      line3.classList.toggle('line3-active');

    });
}

navSlide();

gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(ScrollTrigger);


gsap.to(".page-2",{
  scrollTrigger:{trigger:"#container",
  start:"top top",
  toggleActions:"restart none reverse",
  pin:true,
  scrub:true,
  anticipatePin:1
},
duration:2,
motionPath:{
  path:[{yPercent:-100}]
}
});
gsap.to(".page-3",{
  scrollTrigger:{trigger:".page-3",
  start:"top top",
  toggleActions:"restart none reverse",
  scrub:true,
  pin:true,
  anticipatePin:1
},
duration:2,
motionPath:{
  path:[{xPercent:100,yPercent:0}]
}
});
gsap.to(".page-4",{
  scrollTrigger:{trigger:".page-4",
  start:"top top",
  toggleActions:"restart none reverse",
  scrub:true,
  pin:true,
  anticipatePin:1,
},
duration:2,
motionPath:{
  path:[{xPercent:-100,yPercent:0}]
}
});
gsap.to(".page-5",{
  scrollTrigger:{trigger:".page-5",
  start:"top top",
  toggleActions:"restart none reverse",
  pin:true,
  scrub:true,
  anticipatePin:1,
},
duration:2,
motionPath:{
  path:[{xPercent:100}]
}
});
if(window.innerWidth > 950){
  gsap.to(".paper-plane",{
    scrollTrigger:{
      trigger:".page-4",
      start:"end top",
      scrub:1,
      pin:true,
      toggleActions:"restart none reverse",
      
    },
  
    duration:3,
    motionPath:{
     path:[{x:200, y:-20},{x:400,y:10},
    {x:600,y:100},{x:850,y:-100},
    {x:450,y:-50},{x:700,y:100},{x:900,y:-100},
    {x:window.innerWidth+100,y:-100},],
    autoRotate: true,
     } 
  });
  gsap.to(".progress1-1",{
    scrollTrigger:{trigger:".page-4",
    start:"top center",
    toggleActions:"restart none reverse"
  },
  duration:2,
  motionPath:{
    path:[{x:300, y:0}]
  }
  });
  gsap.to(".progress2-2",{
    scrollTrigger:{trigger:".page-4",
    start:"top center",
    toggleActions:"restart none reverse"
  },
  duration:2,
  motionPath:{
    path:[{x:300, y:0}]
  }
  });
  gsap.to(".progress3-3",{
    scrollTrigger:{trigger:".page-4",
    start:"top center",
    toggleActions:"restart none reverse"
  },
  duration:2,
  motionPath:{
    path:[{x:300, y:0}]
  }
  });
  }
  else {
    gsap.to(".progress1-1",{
      motionPath:{
        path:[{x:0,y:0}]
      }
    });
    gsap.to(".progress2-2",{
      motionPath:{
        path:[{x:0,y:0}]
      }
    });
  
  gsap.to(".progress3-3",{
    motionPath:{
      path:[{x:0,y:0}]
    }
  });
  };