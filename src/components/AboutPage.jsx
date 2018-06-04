import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom';

import AboutTopic from './AboutTopic';

class AboutPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      about: 'ReactRouterから遷移時のPropsを見る',
    };
    console.log(props);
  }

  render() {
    return (
      <Router>
        <div className="about">
          <h1 className="app-title">このサイトはアバウトなページです</h1>
          <h3>{this.state.about}</h3>
          <ul>
            <li><Link to="/about/abouttpoic">トピックを表示する</Link></li>
          </ul>
          <Switch>
            <Route exact path="/about/abouttpoic" component={AboutTopic} />
          </Switch>
        </div>
      </Router>
    );
  }
}

//
// const AboutPage = match => (
//   <div className="about">
//     <h1 className="app-title">このサイトはアバウトなページです</h1>
//   </div>
// );

export default AboutPage;
