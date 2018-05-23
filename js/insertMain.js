export default function () {
  const main = document.createElement('main');
  main.className = 'main';
  main.innerHTML = '<div class="wrapper"> <div class="response"> </div> </div>';
  const mainSection = document.querySelector('body');
  mainSection.appendChild(main);

  const progressBar = document.createElement('img');
  progressBar.className = 'progress-bar';
  progressBar.src = '/myYoutube/images/spinner-of-dots.png';
  mainSection.appendChild(progressBar);
}
