export default function insertClipModal() {
  const clipModal = document.createElement('div');
  clipModal.className = 'clipModal';
  document.querySelector('.main').appendChild(clipModal);

  const iframe = document.createElement('iframe');
  iframe.className = 'iframe';
  iframe.id = 'iframe';
  iframe.style.width = '100%';
  iframe.style.height = '75%';
  iframe.frameBorder = '0';
  iframe.allowFullscreen = 'true';
  clipModal.appendChild(iframe);

  const clipTitle = document.createElement('div');
  clipTitle.className = 'clip-title';
  clipTitle.textContent = '';
  clipModal.appendChild(clipTitle);

  const channelTitle = document.createElement('div');
  channelTitle.className = 'clip-info channel-title';
  channelTitle.textContent = '';
  clipModal.appendChild(channelTitle);

  const viewsCount = document.createElement('div');
  viewsCount.className = 'clip-info';
  viewsCount.textContent = '';
  clipModal.appendChild(viewsCount);

  const clipDescription = document.createElement('div');
  clipDescription.className = 'clip-info clip-desription';
  clipDescription.textContent = '';
  clipModal.appendChild(clipDescription);

  const clipPublished = document.createElement('div');
  clipPublished.className = 'clip-info clip-published';
  clipPublished.textContent = '';
  clipModal.appendChild(clipPublished);
}
