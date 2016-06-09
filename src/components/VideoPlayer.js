import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import { TweenMax } from "gsap";

export default class VideoPlayer extends React.Component {

    constructor(props){
        super(props);
    }

    componentWillAppear(callback){
        console.log("Video Player Appear");
        const el = ReactDOM.findDOMNode(this);
        TweenMax.fromTo(el, 0.3, {x: 200, opacity: 0}, {x: 0, opacity: 1, onComplete: callback});
    }

    componentWillEnter(callback){
        console.log("Video Player Enter");
        const el = ReactDOM.findDOMNode(this);
        TweenMax.fromTo(el, 0.3, {x: 200, opacity: 0}, {x: 0, opacity: 1, onComplete: callback});
    }

    componentWillLeave(callback){
        console.log("Video Player Leaves");
        const el = ReactDOM.findDOMNode(this);
        TweenMax.fromTo(el, 0.3, {x: 0, opacity: 1}, {x: -200, opacity: 0, onComplete: callback});
    }

    render(){
        return(
            <div style={{position: "absolute"}}>
                <div>
                    <video controls="controls">
                        <source src="https://www.abercap.com/build/media/sizzle/sizzle.mp4"/>
                    </video>
                </div>
                <div>
                    <button className="btn btn-default" onClick={this.props.handleClick}>Click Me!</button>
                </div>
            </div>

        );
    }

}