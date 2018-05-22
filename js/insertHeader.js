import clearPageAndSendFetch from './clearPageAndSendFetch';

export default function () {
  const header = document.createElement('header');
  header.className = 'header';
  header.innerHTML = '<div class="wrapper">' +
        '    <form class="search-form" autocomplete="off" name="search" method="post">' +
        '      <input class="search-input" type="text" id="searchKey" name="searchKey">' +
        '      <button class="search-submit" type="submit">' +
        '        Search' +
        '</button>' +
        '    </form>' +
        '  </div>';
  const headerSection = document.querySelector('body');
  headerSection.appendChild(header);
  document.querySelector('.search-form').onsubmit = clearPageAndSendFetch;
}
