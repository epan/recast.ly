class App extends React.Component {
  constructor (props) {
    super (props);
    this.API_KEY = window.YOUTUBE_API_KEY;
    this.state = {
      video: {},
      videoList: []
    };
  }

  componentDidMount () {
    this.getYouTubeVideos(this.API_KEY, 'cats', 5);
  }

  getYouTubeVideos (key, query, max) {
    var options = {
      key: key,
      query: query,
      max: max
    };

    this.props.searchYouTube(options, (data) => {
      this.setState({
        video: data[0],
        videoList: data
      });
    });
  }

  handleVideoTitleClick (video) {
    this.setState({
      video: video
    });
  }

  render () {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.video}/>
        </div>
        <div className="col-md-5">
          <VideoList
            handleVideoTitleClick={this.handleVideoTitleClick.bind(this)}
            videos={this.state.videoList}
          />
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
