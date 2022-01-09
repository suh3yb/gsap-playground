// initialize a timeline
const TL = gsap.timeline({
  defaults: {
    // duration: 1,
    ease: 'power4.out',
  },
  repeat: -1,
  yoyo: true,
  paused: true,
  onComplete: () => console.log('COMPLETE'),
  onStart: () => console.log('START'),
})

// these will start one after another
// TL.from('.img1', { autoAlpha: 0, y: -50, duration: 1 })
//   .from('.img2', { autoAlpha: 0, y: -50, duration: 1 })
//   .from('.img3', { autoAlpha: 0, y: -50, duration: 1 })
//   .from('h1', { autoAlpha: 0, y: -50, duration: 1 })
//   .from('p', { autoAlpha: 0, y: -50, duration: 1 })

// '-=0.75' makes animation start early, a number can be used too
// '<' makes it start at the same time (default is '>')
TL.from('.img1', { autoAlpha: 0, y: -50, duration: 1 })
  .from('.img2', { autoAlpha: 0, y: -50, duration: 1 }, '-=0.75')
  .from('.img3', { autoAlpha: 0, y: -50, duration: 1 }, 2)
  .from('h1', { autoAlpha: 0, y: -50, duration: 1 }, '<')
  // .addLabel('endAnim')
  // .add('endAnim', '-=2')
  .add(() => {
    console.log('bla bla bla')
  })
  .from('p', { autoAlpha: 0, y: -50, duration: 1, ease: 'power4.in' }, '+=0.75')

setTimeout(() => {
  // TL.seek('endAnim')
  TL.play()
  // TL.restart()
}, 1500)
