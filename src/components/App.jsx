class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      video: window.exampleVideoData[0]
    };
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
            videos={window.exampleVideoData}
          />
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
