import sendFetch from './sendFetch';

export default function () {
    let pageHeight = document.documentElement.offsetHeight,
        windowHeight = window.innerHeight,
        scrollPosition = window.scrollY || window.pageYOffset || document.body.scrollTop + (document.documentElement && document.documentElement.scrollTop || 0);


  if (pageHeight - 1 <= windowHeight + scrollPosition) {
    document.querySelector('.progress-bar').classList.add('rotate');
    sendFetch(sendFetch.forNextPageToken);
  }
}
