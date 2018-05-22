export default function closeModal(event) {
  setTimeout(() => {
    if (document.querySelector('.clipModal').classList.contains('clipModalShow')) {
      if (event.type === 'click') {
        if (event.target !== document.querySelector('.clipModal') && event.target !== document.querySelector('.clipModal').childNodes[0]
                    && event.target !== document.querySelector('.clipModal').childNodes[1] && event.target !== document.querySelector('.clipModal').childNodes[2]
                    && event.target !== document.querySelector('.clipModal').childNodes[3] && event.target !== document.querySelector('.clipModal').childNodes[4]
                    && event.target !== document.querySelector('.clipModal').childNodes[5]) {
          document.querySelector('.clipModal').classList.remove('clipModalShow');
          document.querySelector('html').onclick = null;
          const iframe = document.querySelector('#iframe');
          iframe.src = '';
        }
      } else if (event.type === 'touchend') {
        setTimeout(() => {
          document.querySelector('.clipModal').classList.remove('clipModalShow');
          document.querySelector('html').onclick = null;
          const iframe = document.querySelector('#iframe');
          iframe.src = '';
          document.querySelector('.clipModal').classList.remove('right');
          document.querySelector('.clipModal').classList.remove('left');
        }, 500);
      }
    }
  }, 5);
}
