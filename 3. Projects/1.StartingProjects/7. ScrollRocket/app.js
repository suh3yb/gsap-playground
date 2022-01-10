const topRocket = document.querySelector('.top-rocket')
const midRocket = document.querySelector('.mid-rocket')
const rocket = document.querySelector('.bot-rocket')
const supply = document.querySelector('.supply')
const blocks = document.querySelectorAll('.block')

const offsets = [105, 206, 848]

gsap.utils.toArray(['.block2', '.block3', '.block4']).forEach((block, i) => {
  gsap.to(block, {
    y: 0,
    ease: 'linear',
    scrollTrigger: {
      trigger: '.container-scroll',
      start: 'top 50%',
      end: `+=${offsets[i]}`,
      scrub: true,
      // markers: true,
    },
  })
})

blocks.forEach((block, i) => {
  ScrollTrigger.create({
    trigger: block,
    start: i === blocks.length - 1 ? 'top+=200 center' : 'top center+=10%',
    onEnter: () => {
      block.classList.add('active')
    },
    onLeaveBack: () => {
      block.classList.remove('active')
    },
  })
})
