
window.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded');
  const box = document.querySelector('.box');

  box.addEventListener('touchstart', (e) => {
    e.preventDefault();
    console.log('touchstart');
    console.log('touches', e.touches);
    console.log('targetTouches', e.targetTouches);
    console.log('changedTouches', e.changedTouches);
  });
  
  box.addEventListener('touchmove', (e) => {
    e.preventDefault();
    console.log('touchmove');
  });
  
  box.addEventListener('touchend', (e) => {
    e.preventDefault();
    console.log('touchend');
  });

  box.addEventListener('touchenter', (e) => {
    e.preventDefault();
    console.log('touchenter');
  });

  box.addEventListener('touchleave', (e) => {
    e.preventDefault();
    console.log('touchleave');
  });

  box.addEventListener('touchcancel', (e) => {
    e.preventDefault();
    console.log('touchcancel');
  });

});