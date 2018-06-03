import React, { Component } from 'react';

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
      <div className="about">
        <h1 className="app-title">このサイトはアバウトなページです</h1>
        <h4>{this.state.about}</h4>
      </div>
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
