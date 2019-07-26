# io-Animate - Intersection Observer Animate

A pure, vanilla JavaScript, lightweight solution using [Intersection Observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) to animate HTML elements based on their presence in the viewport. This package comes with no built-in CSS animations, instead you can use any CSS animation library, or make your own custom animations. io-Animate simply applies those animations when the specified elements are visible. The [polyfill](https://github.com/w3c/IntersectionObserver/tree/master/polyfill) for the Intersection Observer API is also included, so it should function properly on all devices and modern browsers.

I created this package after running into many issues with CSS animations not properly being triggered on scroll, particularily when using mobile devices or web browsers other than Chrome and Firefox. I found that using the Intersection Observer API was the most accurate when determining if an element was present in the viewport, across all devices and web browsers.

## Getting Started

### Prerequisites

As io-Animate comes with no CSS animations of its own, you must have existing CSS animations. The default CSS prefix for animations is `animated`, which is based off of [animate.css](https://github.com/daneden/animate.css) by Daniel Eden.

```html
<head>
  <link rel="stylesheet" href="path/to/your/animations.css">
</head>
```

### Installing

Install with npm:

```
npm install io-animate
```

or yarn:

```
yarn add io-animate
```

## Usage

For explanation purposes, this documentation will assume that [animate.css](https://github.com/daneden/animate.css) has been pre-loaded.

### Initialization

You must first initialize io-Animate inside your code, with a few configurable options:

```javascript
import ioAnimate from 'io-animate'

ioAnimate(
  '.io-animate', // The document query selector for elements to be observed
  'animated', // The CSS prefix to add to elements when they are visible.
  false // a boolean that determines if the animations should only play once
)
```

### Animations

Add the document query selector specified when initalizing io-Animate to the elements. In this example it is the CSS class `io-animate`

Each element must specify the animation CSS class to trigger. Optionally, you can add more classes for delay and speed times.

```html
<div class="io-animate" data-ioa-in="fadeIn" data-ioa-out="fadeOut" data-ioa-delay="delay-1s" data-ioa-speed="slow">Once visible, this div will fade in slowly after a 1 second delay, and will fade out while scrolling out.</div>
```

There are 4 data attributes to configure:

| Attribute     | Description   | Example  |
| ------------- |:-------------:| --------:|
| data-ioa-in   | Animation when the element becomes visible. | fadeIn |
| data-ioa-out  | Animation when the element is not visible. | fadeOut |
| data-ioa-delay | CSS class used to add animation delay. | delay-1s |
| data-ioa-speed | CSS class that determines the animation speed. | slow |

Using every data attribute, the resulting CSS class of an element would look like this once visible:

```html
<div class="io-animate animated fadeIn delay-2s slow">I will fade in.</div>
```

## Authors

* **Wesley Moses** - *Initial work* - [wes337](https://github.com/wes337)
