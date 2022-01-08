const img1 = document.querySelector('.img1')
const img2 = document.querySelector('.img2')

// gsap.to('.img1', {
// gsap.to(img1, {
//   x: 100,
//   y: 100,
//   rotation: 45, // '45deg' also works
//   backgroundColor: 'red', // #fff also works
//   duration: 2, // default 0.5
// })

// using from opacity 0 causes flashes thus we set visibility
// hidden in CSS and use autoAlpha property from gsap for appearance
// effect
// visibility: hidden hides elements from screen readers too
// gsap.from(img1, {
//   autoAlpha: 0,
//   rotation: 45,
//   scale: 0.5,
//   x: 100,
//   y: -100,
//   duration: 2,
// })

/**
 * Warning
 * Check the following code
 * If user clicks several time, instead of to opacity 1, gsap make the
 * animation until 0.12 for example
 * so instead of from, we use fromTo method from gsap
 */
document.querySelector('.btn').addEventListener('click', () => {
  // gsap.from(img1, { autoAlpha: 0, duration: 2 })
  gsap.fromTo(img1, { autoAlpha: 0 }, { autoAlpha: 1, duration: 2 })
})

/**
 * Easing
 * .in, .out and .inOut is possible for ease
 * if not specified, default is .out
 * check docs for more info
 */
gsap.from(img1, {
  autoAlpha: 0,
  rotation: 90,
  y: -100,
  // ease: 'power4.inOut',
  // ease: 'back.out(1.7)',
  ease: 'bounce.out(1.7)',
  duration: 2,
})

// gsap.from(img1, {
//   autoAlpha: 0,
//   duration: 2,
//   pause: true,
//   delay: 0.5,
//   repeat: 2, // -1 for infinity
//   repeatDelay: 0.2,
//   yoyo: true, // back and forth
// })

// stagger
// gsap.from('img', {
//   autoAlpha: 0,
//   y: -100,
//   ease: 'power4',
//   duration: 2,
//   stagger: {
//     // delay between animations
//     each: 0.5,
//     // amount: 1,
//     from: 'end', // where to start
//   },
//   // also accepts a function
//   // stagger: index => {
//   //   console.log('index :>> ', index)
//   // },
// })

// random
gsap.to('.btn', {
  duration: 0.4,
  stagger: 0.2,
  x: 'random(-100, 100)',
  // x: 'random(-100, 100, 10)',
  // x: 'random([20, 50, 80, -90, -50])',
})

// multi step animation with keyframes
// gsap.to(img2, {
//   keyframes: [
//     { duration: 0.3, x: 100 },
//     { duration: 0.3, y: 100 },
//     { duration: 0.3, x: 200 },
//   ],
// })

// events
// gsap.to(img2, {
//   x: 100,
//   duration: 1,
//   repeat: 1,
//   onComplete: () => console.log('COMPLETE'),
//   onStart: () => console.log('START'),
//   onUpdate: () => console.log('UPDATE'),
//   onRepeat: () => console.log('REPEAT'),
// })

// register and reuse a tween
gsap.registerEffect({
  name: 'imgAnimation',
  effect: (targets, config) => {
    return gsap.to(targets, {
      duration: config.duration,
      y: 200,
      scale: 1.4,
      rotation: 360,
    })
  },
  defaults: { duration: 2 },
})

gsap.effects.imgAnimation(img2, { duration: 5 })

// setting style
// gsap.set(img2, { opacity: 0 })

// utility methods
// check docs for more
// const tween = gsap.to(img2, { y: 200, paused: true, duration: 5 })

// setTimeout(() => {
//   tween.resume()
//   tween.seek(2.5)
//   tween.play()
// }, 2000)
// tween.kill()
// tween.delay(1)
// tween.duration(5)
