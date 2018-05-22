import sendFetch from './sendFetch';

export default function clearPageAndSendFetch() {
  document.querySelector('.progress-bar').classList.add('rotate');
  const forNextPageToken = '';
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  document.querySelector('.response').innerHTML = '';
  sendFetch(forNextPageToken);
}
