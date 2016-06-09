import React from "react";
import ReactDOM from "react-dom";
import TransitionGroup from "react-addons-transition-group";
import MovieTable from "./components/MovieTable";
import VideoPlayer from "./components/VideoPlayer";

export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            component: "movieTable",
            activeFile: null
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        let nextComponent;
        switch (this.state.component){
            case "movieTable":
                nextComponent = "videoPlayer";
                break;
            case "videoPlayer":
                nextComponent = "movieTable";
                break;
            default:
                nextComponent = "movieTable";
                break;
        }
        this.setState({component: nextComponent});
    }

    renderIngestTable(){
        return (
            <MovieTable handleClick={this.handleClick}/>
        );
    }

    renderVideoPlayer(){
        return(
            <VideoPlayer handleClick={this.handleClick}/>
        );
    }

    render(){
        return (
            <div className="container" style={{position: "relative"}}>
                <h1>Movie App</h1>
                <TransitionGroup>
                    {this.state.component === "movieTable" ? this.renderIngestTable() : null}
                    {this.state.component === "videoPlayer" ? this.renderVideoPlayer() : null}
                </TransitionGroup>
            </div>);
    }
}

ReactDOM.render(<App />, document.getElementById('app'));