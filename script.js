const tl = gsap.timeline();

function homePage() {

    tl.from('#menu', {
        y: -10,
        opacity: 0,
        duration: 1,
        delay: 0.3,  // Delay before #menu starts animating
    })
        .from('#logo', {
            y: -10,
            opacity: 0,
            duration: 0.8,
            delay: 0.3
        }, 0)
        .from('#lastMenu', {
            y: -10,
            opacity: 0,
            duration: 0.8,
            delay: 0.3
        }, 0)
        .from('#started', {
            x: -20,
            opacity: 0,
            delay: 0.5
        }, 0)
        .from('#address p', {
            x: -20,
            opacity: 0,
            duration: 0.8,
            delay: 0.5,
            stagger: 0.5
        }, 0)
        .from('#shoes', {
            y: 50,
            opacity: 0,
            scale: 0.8,
            duration: 1,
            ease: "power3.out",
            delay: 0.5
        }, 0)
        .from('#products', {
            y: 50,
            opacity: 0,
            scale: 0.8,
            duration: 1,
            ease: "power3.out",
            delay: 0.7
        }, 0)
        .from('.linee', {
            y: -20,
            opacity: 0,
            duration: 0.5,
            ease: "power3.out",
            stagger: 0.3,
            delay: 0.2
        }, 0)
        .from('.infoNe', {
            x: -20,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out",
            stagger: 0.3,
            delay: 1.2
        }, 0)
        .from('#scrollDown', {
            y: -10,
            opacity: 0,
            duration: 0.4,
            delay: 2
        }, 0);
}

homePage()


function sectionTwo() {
    tl.from('#secTwo', {
        y: 20,
        opacity: 0,
        duration: 1,
        delay: 0.7,
        scrollTrigger: {
            trigger: '#secTwo',
            scroller: "body",
            // markers:true,
            start: "top 82%",
            end: "top 100%",
            scrub: 4

        }

    }, 0)

        .from('#expertise', {
            y: -15,
            opacity: 0,
            duration: 1.5,
            delay: 1,
            scrollTrigger: {
                trigger: '#expertise h1',
                scroller: "body",
                start: "top 82%",
                end: "top 100%",
                scrub: 4
            }
        }, 0)

        .from('.expertBox', {
            y: -20,
            opacity: 0,
            duration: 2,
            delay: 1.5,
            stagger: 4,
            scrollTrigger: {
                trigger: '.expertBox',
                scroller: "body",
                start: "top 80%",
                end: "top 100%",
                scrub: 4
            }
        }, 0)

        .from('#impactLine h1', {
            y: -30,
            opacity: 0,
            duration: 6,
            delay: 1,
            stagger: 3,
            scrollTrigger: {
                trigger: '#impactLine',
                scroller: "body",
                // markers:true,
                start: "top 50%",
                end: "top 80%",
                scrub: 6
            }
        }, 0)

        .from("#impactElem", {
            rotation: 360,
            y: 100,
            opacity: 0,
            scale: 0,
            duration: 8,
            delay: 3,
            ease: "back.out(1.7)",
            repeat: 0,
            transformOrigin: "center",
            scrollTrigger: {
                trigger: '#impactElem',
                scroller: "body",
                // markers: true,
                start: "top 80%",
                end: "top 100%",
                scrub: 6
            }
        }, 0)


        .from('.sevenline', {
            y: -30,
            opacity: 0,
            duration: 3,
            delay: 1,
            stagger: 3,
            scrollTrigger: {
                trigger: '.sevenline',
                scroller: "body",
                // markers: true,
                start: "top 75%",
                end: "top 100%",
                scrub: 4
            }
        }, 0)
}

sectionTwo()

function sectionFour() {

    tl.from('.dropline', {
        y: -10,
        opacity: 0,
        duration: 2,
        delay: 1,
        stagger: 4,
        scrollTrigger: {
            trigger: '.dropline',
            scroller: "body",
            // markers:true,
            start: "top 60%",
            end: "top 100%",
            scrub: 6

        }
    }, 0)

        .from('.adrop', {
            y: -10,
            opacity: 0,
            duration: 1.2,
            delay: 1,
            stagger: 3,
            scrollTrigger: {
                trigger: '.adrop',
                scroller: "body",
                // markers: true,
                start: "top 80%",
                end: "top 100%",
                scrub: 3
            }
        }, 0)

        .from('.smallDrop', {
            y: -10,
            opacity: 0,
            duration: 1.2,
            delay: 1,
            stagger: 3,
            scrollTrigger: {
                trigger: '.smallDrop',
                scroller: "body",
                start: "top 88%",
                end: "top 100%",
                scrub: 3
            }
        }, 0)


        .from('.ldrop', {
            y: -10,
            opacity: 0,
            duration: 1.2,
            delay: 1,
            scrollTrigger: {
                trigger: '.ldrop',
                scroller: "body",
                start: "top 90%",
                end: "top 100%",
                scrub: 3
            }
        }, 0)

}

sectionFour()

function sectionThree(){

    tl.from('.bdrop', {
        y: -20,
        opacity: 0,
        duration: 2,
        delay: 1,
        stagger: 2,
        scrollTrigger: {
            trigger: '.bdrop',
            scroller: "body",
            // markers: true,
            start: "top 80%",
            end: "top 100%",
            scrub: 6

        }
    }, 0)

        .from('.imagedrop ', {
            x: -20,
            opacity: 0,
            duration: 4,
            delay: 4,
            stagger: 3,
            scrollTrigger: {
                trigger: '.imagedrop ',
                scroller: "body",
                // markers: true,
                start: "top 75%",
                end: "top 100%",
                scrub: 6

            }
        }, 0)


}

sectionThree()