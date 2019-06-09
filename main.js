const good = document.getElementById('good');
const topNav = document.getElementById('myTopnav');
const innerGood = document.getElementById('inner-good');

good.addEventListener('mouseenter', function() {
  topNav.classList.add('show')
  good.setAttribute('aria-expanded', true)
  innerGood.classList.add('show')
  innerGood.setAttribute('style', 'position: absolute; transform: translate3d(156px, 53px, 0px); top: 0px; left: 0px; will-change: transform;')
});

// good.addEventListener('mouseleave', function() {
//   innerGood.classList.remove('show')
//   topNav.classList.remove('show')
//   good.setAttribute('aria-expanded', false)
// });

