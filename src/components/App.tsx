import * as React from 'react';
import {TopBar} from "./top_bar/TopBar";
import Main from "./main/MainContainer";
import './App.scss'

export class App extends React.Component {

  render() {
    return <div>
      <TopBar/>
      <Main/>
    </div>;
  }
}
