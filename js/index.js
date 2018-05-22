
// my api key: AIzaSyCeY1fuTnv0Yhql8rHfiKH0OG3_oADUJgE
import '../css/index.css';
import insertHeader from '../js/insertHeader';
import insertMain from '../js/insertMain';
import infiniteScroll from '../js/infiniteScroll';
import insertClipModal from './insertClipModal';

insertHeader();
insertMain();
insertClipModal();

window.onscroll = infiniteScroll;

// document.querySelector('html').onclick = closeModal;

