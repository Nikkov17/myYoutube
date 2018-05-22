import showResponse from './showResponse';

export default function sendFetch(forNextPageToken) {
  event.preventDefault();
  let fetchData;
  const searchKey = document.querySelector('#searchKey').value;
  if (forNextPageToken !== '') {
    fetchData = `https://www.googleapis.com/youtube/v3/search?pageToken=${forNextPageToken}&key=AIzaSyCeY1fuTnv0Yhql8rHfiKH0OG3_oADUJgE&type=video&part=snippet&maxResults=15&q=`;
  } else {
    document.querySelector('.clipModal').classList.remove('clipModalShow');
    fetchData = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyCeY1fuTnv0Yhql8rHfiKH0OG3_oADUJgE&type=video&part=snippet&maxResults=15&q=';
  }

  fetch(fetchData + searchKey)
    .then((response) => {
      if (response.status !== 200) {
        console.log(`Looks like there was a problem. Status Code: ${
          response.status}`);
        return;
      }

      response.json().then((data) => {
        sendFetch.forNextPageToken = data.nextPageToken;

        const generalData = data;
        let idString = '';
        for (const j in data.items) {
          idString += `${data.items[j].id.videoId},`;
        }
        fetch(`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${idString}&key=AIzaSyCeY1fuTnv0Yhql8rHfiKH0OG3_oADUJgE`)
          .then((response) => {
            if (response.status !== 200) {
              console.log(`Looks like there was a problem. Status Code: ${
                response.status}`);
              return;
            }

            response.json().then((data) => {
              showResponse(generalData, data);
            });
          })
          .catch((err) => {
            console.log('Fetch Error :-S', err);
          });
      });
    })
    .catch((err) => {
      console.log('Fetch Error :-S', err);
    });
}
