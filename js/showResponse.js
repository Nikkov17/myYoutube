import clipModal from './clipModal';

export default function showResponse(response, statistics) {
  document.querySelector('.progress-bar').classList.remove('rotate');
  const domResponseSection = document.querySelector('.response');
  for (const i in response.items) {
    const publishTime = response.items[i].snippet.publishedAt.substr(0, 10);
    const div = document.createElement('div');
    div.className = 'clip-component';
    domResponseSection.appendChild(div);

    const clipImg = document.createElement('img');
    clipImg.src = response.items[i].snippet.thumbnails.medium.url;
    clipImg.className = 'clip-img';
    clipImg.id = response.items[i].id.videoId;
    clipImg.onclick = clipModal;
    div.appendChild(clipImg);

    const clipTitle = document.createElement('div');
    clipTitle.className = 'clip-title';
    clipTitle.id = response.items[i].id.videoId;
    clipTitle.textContent = response.items[i].snippet.title;
    div.appendChild(clipTitle);

    const channelTitle = document.createElement('div');
    channelTitle.className = 'clip-info channel-title';
    channelTitle.id = response.items[i].id.videoId;
    channelTitle.textContent = response.items[i].snippet.channelTitle;
    div.appendChild(channelTitle);

    const viewsCount = document.createElement('div');
    viewsCount.className = 'clip-info';
    viewsCount.id = response.items[i].id.videoId;
    viewsCount.textContent = `${statistics.items[i].statistics.viewCount} views`;
    div.appendChild(viewsCount);

    const clipDescription = document.createElement('div');
    clipDescription.className = 'clip-info clip-desription';
    clipDescription.id = response.items[i].id.videoId;
    clipDescription.textContent = response.items[i].snippet.description;
    div.appendChild(clipDescription);

    const clipPublished = document.createElement('div');
    clipPublished.className = 'clip-info clip-published';
    clipPublished.id = response.items[i].id.videoId;
    clipPublished.textContent = publishTime;
    div.appendChild(clipPublished);
  }
}
