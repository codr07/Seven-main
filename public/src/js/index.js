gsap.registerPlugin(ScrollTrigger , ScrollSmoother);

gsap.to(".pre-loader",{
    opacity:0,
    scale:4,
    delay:3,
    duration:1,
    display:"none",
    ease:"ease.out"
})
gsap.to(".nav",{
    translateY:-1210,
    delay:3.5,
    duration:1,
    ease:"ease",
})
gsap.from(".mid .svg-pg svg",{
    opacity:0,
    delay:3.5,
    duration:5,
    strokeDashoffset: 100,
    strokeDasharray: 600,
    iterations: Infinity,
    ease:"ease"
})
gsap.from(".mid .svg-pg",{
    opacity:0,
    delay:3.9,
    duration:2,
    ease:"ease"
})
gsap.from("#study",{
    opacity:0,
    delay:5.3,
    duration:1,
})
gsap.from("#dev",{
    opacity:0,
    delay:6.3,
    duration:0.3,
})
gsap.from("#build",{
    opacity:0,
    delay:5,
    duration:0.7,
})
gsap.from("#emerge",{
    opacity:0,
    delay:6,
    duration:1.1,
})
gsap.from("#flow",{
    opacity:0,
    delay:5.8,
    duration:0.4,
})
gsap.from("#grow",{
    opacity:0,
    delay:5.2,
    duration:0.99,
})
gsap.from(".b",{
    opacity:0,
    delay:5.5,
    duration:0.5,
    ease:"ease"
})
gsap.to(".b",{
    scrollTrigger:{
        trigger:".hero .b",
        start:"top 95%",
        end:"bottom 30%",
        //markers:true,
        scrub:1,
    },
    translateY:-500,
    duration:1,
    ease:"ease"
})
gsap.to("#home .container1",{
    scrollTrigger:{
        trigger:"#home .container1",
        start:"top 95%",
        end:"bottom 50%",
        // markers:true,
    },
    width:"100%",
    padding:"1rem",
    duration:1,
    ease:"ease"
})
gsap.to(".container1 .wrapper-home",{
    scrollTrigger:{
        trigger:".container1 .wrapper-home",
        start:"top 95%",
        end:"bottom 50%",
        // markers:true,
    },
    padding:"4rem",
    duration:1,
    ease:"ease"
})
gsap.to(".container1 .wrapper-home :nth-child(1) span",{
    scrollTrigger:{
        trigger:".container1 .wrapper-home :nth-child(1) span",
        start:"top 75%",
        end:"bottom 60%",
        // markers:true,
    },
    translateX:-20,
    translateY:-170,
    duration:1,
    ease:"ease"
})
gsap.to(".container1 .wrapper-home :nth-child(2) span:nth-child(3)",{
    scrollTrigger:{
        trigger:".container1 .wrapper-home :nth-child(2) span:nth-child(3)",
        start:"top 98%",
        end:"bottom 80%",
        // markers:true,
    },
    translateX:340,
    duration:1,
    ease:"ease"
})
gsap.to(".card-container",{
    scrollTrigger:{
        trigger:".card-container",
        start:"top 98%",
        end:"bottom 80%",
        // markers:true,
        scrub:1,
    },
    width:"75%",
    backgroundColor:"transparent",
    duration:1,
    ease:"ease"
})
gsap.to(".card-container #card-1",{
    scrollTrigger:{
        trigger:".card-container",
        start:"top 70%",
        end:"bottom 75%",
        markers:true,
        scrub:0.5,
    },
    rotateY:180,
    borderRadius:"20px",
    margin:"5px",
    delay:0.4,
    duration:1,
    ease:"ease"
})
gsap.to(".card-container #card-2",{
    scrollTrigger:{
        trigger:".card-container",
        start:"top 70%",
        end:"bottom 75%",
        markers:true,
        scrub:0.9,
    },
    rotateY:180,
    borderRadius:"20px",
    margin:"5px",
    delay:0.7,
    duration:1,
    ease:"ease"
})
gsap.to(".card-container #card-3",{
    scrollTrigger:{
        trigger:".card-container",
        start:"top 70%",
        end:"bottom 75%",
        markers:true,
        scrub:1.3,
    },
    rotateY:180,
    borderRadius:"20px",
    margin:"5px",
    delay:1,
    duration:1,
    ease:"ease"
})

gsap.utils.toArray("#study, #dev, #build").forEach(el => {
  const speed = parseFloat(el.dataset.speed) || 1;

  gsap.to(el, {
    x: -250 * speed,
    duration: 1.5,
    ease: "back.inOut(1.7)",
    scrollTrigger: {
      trigger: ".u .left",
      start: "top 45%",
      end: "bottom 15%",
      scrub: 3,
    }
  });
})
gsap.utils.toArray("#emerge, #flow, #grow").forEach(el => {
  const speed = parseFloat(el.dataset.speed) || 1;

  gsap.to(el, {
    x: 250 * speed,
    duration: 1.5,
    ease: "back.inOut(1.7)",
    scrollTrigger: {
      trigger: ".u .right",
      start: "top 45%",
      end: "bottom 15%",
      scrub: 3,
    }
  });
})
