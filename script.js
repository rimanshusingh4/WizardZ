(function page1(){
    var tl = gsap.timeline()

tl.from("nav h1 ,nav h4,nav button",{
    y:-30,
    opacity: 0,
    delay: 0.5,
    duration: 0.5,
    stagger: 0.15,
})

tl.from(".center .center-part1 h1,.center .center-part1 p",{
    x:-200,
    opacity: 0,
    duration: 0.5,
    stagger: 0.3,
})
tl.from(".center .center-part1 button",{
    opacity: 0,
    duration: 0.5,
})
tl.from(".center-part2 img",{
    x: 200,
    opacity: 0,
    duration:0.7,
},"-=1")
tl.from(".section1bottom img",{
    opacity:0,
    y: 30,
    stagger: 0.2,
    duration: 0.5,
})

})();

(function page2(){
    
    var tl2 = gsap.timeline({
        scrollTrigger:{
            trigger: ".section2",
            scroller: "body",
            start: "top 40%",
            end: "top 0%",
            scrub: 2
        }
    })


    tl2.from(".services",{
        y:-50,
        opacity:0,
        duration: 0.5,
    })

    tl2.from(".elem.line1.left",{
        x: -300,
        opacity: 0,
        duration: 1,
    },"same")

    tl2.from(".elem.line1.right",{
        x: 300,
        opacity: 0,
        duration: 1,
    },"same")
})();

(function page3(){
    
    var tl3 = gsap.timeline({
        scrollTrigger:{
            trigger: ".section3",
            scroller: "body",
            start: "top 30%",
            end: "top 0%",
            scrub: 1,
        }
    })

    tl3.from(".section3",{
        y:0,
        opacity:0,
        duration:0.7
    },"outer")
    tl3.from(".outer img",{
        x: -300,
        opacity:0,
        duration:0.7,
    },"outer")
    tl3.from(".outer .section3part1",{
        x: 300,
        opacity:0,
        duration:0.7,
    },"outer")

    tl3.from(".section4part1 h1",{
        x:500,
        opacity:0,
        duration:0.7,
    },"section4part2h1")
    tl3.from(".section4part1 p",{
        x:-500,
        opacity:0,
        duration:0.7,
    },"section4part2h1")

    tl3.from(".section4part2",{
        y:-30,
        scale:0,
        opacity:0,
        duration:2,
    })
    tl3.from(".part1.left",{
        x:-200,
        scale:0,
        opacity:0,
        duration:2,
    },"last")
    tl3.from(".part1.down",{
        y:100,
        scale:0,
        opacity:0,
        duration:2,
    },"last")
    tl3.from(".part1.right",{
        x:200,
        scale:0,
        opacity:0,
        duration:2,
    },"last")
})();