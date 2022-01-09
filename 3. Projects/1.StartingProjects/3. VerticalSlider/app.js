window.addEventListener('load', animation)

function animation() {
  const elems = document.querySelectorAll('.vertical-slider p')
  const TL = gsap.timeline({ repeat: -1 })

  TL.from(elems, {
    y: 100,
    autoAlpha: 0,
    duration: 0.75,
    stagger: 0.75,
  }).to(
    elems,
    {
      y: -100,
      autoAlpha: 0,
      duration: 0.75,
      stagger: 0.75,
    },
    0.75
  )
}
