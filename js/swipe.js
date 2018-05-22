import closeModal from './closeModal';

export default function swipe() {
  let touchstartX = 0;
  let touchendX = 0;

  const gestureZone = document.querySelector('.clipModal');

  gestureZone.addEventListener('touchstart', (event) => {
    touchstartX = event.changedTouches[0].screenX;
  }, false);

  gestureZone.addEventListener('touchend', (event) => {
    touchendX = event.changedTouches[0].screenX;
    handleGesture();
  }, false);

  function handleGesture() {
    if (touchendX < touchstartX) {
      document.querySelector('.clipModal').classList.add('left');
      closeModal(event);
    }

    if (touchendX > touchstartX) {
      document.querySelector('.clipModal').classList.add('right');
      closeModal(event);
    }
  }
}

