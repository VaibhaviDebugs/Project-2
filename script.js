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

var timeout;

function circleskew(){
    //  define default scale value
    var xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 0;

    window.addEventListener("mousemove", function(dets){
    clearTimeout(timeout);

    var xscale = gsap.utils.clamp(.8, 1.2, dets.clientX - xprev);
    var yscale = gsap.utils.clamp(.8, 1.2, dets.clientY - yprev);
    
    xprev = dets.clientX;
    yprev = dets.clientY;

    circleMouseFollower(xscale, yscale);
    timeout =  setTimeout(function(){
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;

    }, 100);
    
        
        
    });
}


function circleMouseFollower(xscale, yscale){
    window.addEventListener ("mousemove", function(dets){
        document.querySelector(
            "#minicircle"
            ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
            
        })
    }
    circleskew();
 circleMouseFollower();
firstPageAnim();
document.querySelectorAll(".elem").forEach(function(elem){
    elem.addEventListener("mousemove", function(dets){
    gsap.to(elem.querySelector("img"),{
        opacity:1,
        ease: power1,

    })
    })
})
