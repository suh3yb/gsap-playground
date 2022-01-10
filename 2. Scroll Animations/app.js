gsap.from('.b2 h2', {
  duration: 1,
  autoAlpha: 0,
  y: 100,
  scale: 0.5,
  scrollTrigger: {
    trigger: '.b2 h2',
    // to debug
    // markers: true,
    // Trigger scroller
    // start: 'top bottom', // default
    // start: 'top bottom-=200',
    start: 'top 80%',
    // end: 'bottom top', // default
    end: 'bottom 30%',
    // onEnter onLeave onEnterBack onLeaveBack
    toggleActions: 'play pause reverse reset',
    onEnter: () => console.log('ENTER'),
    onLeave: () => console.log('LEAVE'),
    onEnterBack: () => console.log('ENTERBACK'),
    onLeaveBack: () => console.log('LEAVEBACK'),
    // follow scrolling
    // scrub: true,
    scrub: 0.5,
  },
})

ScrollTrigger.create({
  trigger: '.b2',
  pin: true,
  markers: true,
  end: 'bottom 50%',
})
