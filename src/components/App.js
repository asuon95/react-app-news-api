import React, { Component } from 'react';
import './App.css';
import News from './News/News';
import Sidenews from './News/Sidenews';

const myStyle = {
    backgroundColor: 'ghostwhite',
}

const myHeaderStyle = {
  padding: '10px',
  textAlign: 'center',
}

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
            <h3 style={myHeaderStyle}>Top Headlines: Technology in US</h3>
            <div className="divider"></div>
            <News topic={this.state.news1} />
            <h3 style={myHeaderStyle}>Top Headlines: Science in US</h3>
            <div className="divider"></div>
            <News topic={this.state.news2} />
            <h3 style={myHeaderStyle}>Top Headlines: Entertainment in US</h3>
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
