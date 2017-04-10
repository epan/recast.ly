var searchYouTube = ({key, query, max = 5}, callback) => {
  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    videoEmbeddable: 'true',
    type: 'video',
    key: key,
    q: query,
    maxResults: max
  })
  .done(({items}) => {
    if (callback) {
      callback(items);
    }
  })
  .fail(({responseJSON}) => {
    responseJSON.error.errors.forEach((err) => console.error(err));
  });
};

window.searchYouTube = searchYouTube;
