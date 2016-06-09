import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import { TweenMax } from "gsap";

export default class MovieTable extends React.Component {

    constructor(props){
        super(props);
        this.state = {movies: []};
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
      let data = [
        {
          id: 1,
          title: "Magnolia",
          director: "Paul Thomas Anderson"
        },
        {
          id: 2,
          title: "The Social Network",
          director: "David Fincher"
        },
        {
          id: 3,
          title: "The Tree of Life",
          director: "Terrence Malick"
        },
        {
          id: 4,
          title: "Lawrence of Arabia",
          director: "David Lean"
        },
        {
          id: 5,
          title: "2001: A Space Odyssey",
          director: "Stanley Kubrick"
        },
        {
          id: 6,
          title: "The Sound of Music",
          director: "Robert Wise"
        }
      ];
      this.setState({movies: data});
    }

    componentWillAppear(callback){
        console.log("MovieTable Appeared");
        const el = ReactDOM.findDOMNode(this);
        TweenMax.fromTo(el, 0.3, {y: -200, opacity: 0}, {y: 0, opacity: 1, onComplete: callback});
    }

    componentWillEnter(callback){
        console.log("MovieTable Entered");
        const el = ReactDOM.findDOMNode(this);
        TweenMax.fromTo(el, 0.3, {x: 200, opacity: 0}, {x: 0, opacity: 1, onComplete: callback});
    }

    componentWillLeave(callback){
        console.log("MovieTable Removed");
        const el = ReactDOM.findDOMNode(this);
        TweenMax.fromTo(el, 0.3, {x: 0, opacity: 1}, {x: -200, opacity: 0, onComplete: callback});
    }

    handleClick(param1, param2, param3){
        this.props.handleClick();
    }

    render(){
        return(
           <table className="table table-striped table-bordered table-hover" style={{position: "absolute"}}>
               <thead>
               <tr>
                   <th>ID</th>
                   <th>Title</th>
                   <th>Director</th>
               </tr>
               </thead>
               <tbody>{this.state.movies.map((movie) =>
               {return (
                   <tr key={movie.id} onClick={this.handleClick}>
                       <td>{movie.id}</td>
                       <td>{movie.title}</td>
                       <td>{movie.director}</td>
                   </tr>
               )
               })}</tbody>
           </table>
         );
    }
}