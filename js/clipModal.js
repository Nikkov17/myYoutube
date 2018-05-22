import closeModal from './closeModal';
import swipe from './swipe';

export default function clipModal() {
  const modal = document.querySelector('.clipModal');
  modal.classList.add('clipModalShow');

  const iframe = document.querySelector('#iframe');
  iframe.src = `https://www.youtube.com/embed/${this.id}`;

  const curInfo = document.querySelectorAll(`#${this.id}`);

  modal.children[1].innerHTML = curInfo[1].innerHTML;
  modal.children[2].innerHTML = curInfo[2].innerHTML;
  modal.children[3].innerHTML = curInfo[3].innerHTML;
  modal.children[4].innerHTML = curInfo[4].innerHTML;
  modal.children[5].innerHTML = curInfo[5].innerHTML;


  clipModal.innerHTML = setTimeout(() => { document.querySelector('html').onclick = closeModal; }, 5);
  swipe();
}
