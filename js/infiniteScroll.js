import sendFetch from './sendFetch';

export default function () {
  const pageHeight = document.documentElement.offsetHeight;
  const windowHeight = window.innerHeight;
  const scroll = window.scrollY || window.pageYOffset || document.body.scrollTop;
  const scrollTop = document.documentElement.scrollTop || 0;
  const scrollPosition = scroll + (document.documentElement && scrollTop);

  if (pageHeight - 1 <= windowHeight + scrollPosition) {
    document.querySelector('.progress-bar').classList.add('rotate');
    sendFetch(sendFetch.forNextPageToken);
  }
}
