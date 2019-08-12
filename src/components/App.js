import React, { Component } from 'react';
import './App.css';
import News from './News/News';
import Sidenews from './News/Sidenews';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
        news1: {
          contentType: 'top-headlines',
          query: 'country=us&category=technology'
        },
        news2: {
          contentType: 'top-headlines',
          query: 'country=us&category=science'
        },
        news3: {
          contentType: 'top-headlines',
          query: 'country=us&category=entertainment'
        },
        news4: {
          contentType: 'everything',
          query: 'domains=comicbookmovie.com&language=en'
        }
    };
  }
  
  render() {
    return (
      <div className="container-fluid">
        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper black lighten-4">
              <a href="/" className="brand-logo center">My Feed</a>
            </div>
          </nav>
        </div>
        <div className="row">
          <div className="col s12">
            <h4 className="headline">Top Headlines: Technology in US</h4>
            <div className="divider"></div>
            <News topic={this.state.news1} />
            <h4 className="headline">Top Headlines: Science in US</h4>
            <div className="divider"></div>
            <News topic={this.state.news2} />
            <h4 className="headline">Top Headlines: Entertainment in US</h4>
            <div className="divider"></div>
            <News topic={this.state.news3} />
          </div>
          {/* <div className="col s4" style={myStyle}>
            <h3 style={myHeaderStyle}>Side News</h3>
            <Sidenews topic={this.state.news4} />
          </div> */}
        </div>
      </div>
    );
  }
}

export default App;
