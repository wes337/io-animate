require('intersection-observer')

function init(
  selector = '.io-animate',
  animationIn = 'fadeIn',
  animationOut = undefined,
  once = false
) {
  const intersectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        entry.target.classList.remove('animated', animationOut)
        entry.target.classList.add('animated', animationIn)
      } else if (entry.intersectionRatio !== 1) {
        entry.target.classList.remove('animated', animationIn)
        if (animationOut) {
          entry.target.classList.add('animated', animationOut)
        }
      }

      if (once) {
        observer.unobserve(entry.target)
      }
    })
  })
  
  // get your elements, by class name '.js-item'
  const elements = [...document.querySelectorAll(selector)]
  
  // start observing your elements
  elements.forEach((element) => intersectionObserver.observe(element))
}

module.exports = { init }