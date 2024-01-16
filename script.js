const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firstPageAnim(){
    var tl = gsap.timeline();
    tl.from("#nav",{
        y: '-10',
        opacity: 0,
        duration:1.6,
        ease :Expo.InOut
    })
    
    .to(".boundingelem",{
        stagger: .2,
        y: 0,
        duration:2,
        ease :Expo.InOut,
        delay:-1
        
    })
    
    .from("#herofooter",{
        y: -10,
        duration:1.5,
        opacity:0,
        delay: -1 ,
        ease :Expo.InOut
        
    })
}
funct

function circleMouseFollower(){
    window.addEventListener("mousemove", function(dets){
document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`

    })
}
circleMouseFollower();
firstPageAnim();