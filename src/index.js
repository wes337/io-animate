require('intersection-observer')

function ioAnimate(
  selector = '.io-animate',
  cssPrefix = 'animated',
  once = false
) {
  const intersectionObserver = new IntersectionObserver((entries, observer) => {
    const animationIn = entry.target.getAttribute('data-ioa-in')
    const animationOut = entry.target.getAttribute('data-ioa-out')
    const delay = entry.target.getAttribute('data-ioa-delay')
    const speed = entry.target.getAttribute('data-ioa-speed')

    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        entry.target.classList.remove(cssPrefix, animationOut, delay, speed)
        entry.target.classList.add(cssPrefix, animationIn, delay, speed)
      } else if (entry.intersectionRatio !== 1) {
        entry.target.classList.remove(cssPrefix, animationIn, delay, speed)
        entry.target.classList.add(cssPrefix, animationOut), delay, speed
      }

      if (once) {
        observer.unobserve(entry.target)
      }
    })
  })
  
  const elements = [...document.querySelectorAll(selector)]
  
  elements.forEach((element) => intersectionObserver.observe(element))
}

module.exports = { ioAnimate }
