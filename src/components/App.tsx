import * as React from 'react';
import TopBar from "./top_bar/TopBarContainer";
import Main from "./main/MainContainer";
import './App.scss'

export class App extends React.PureComponent {

    render() {
        return <div>
            <TopBar/>
            <Main/>
        </div>;
    }
}
