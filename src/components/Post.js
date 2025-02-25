import React , { Component } from "react";
import { connect } from "react-redux";
import getData  from "../js/actions/getData";
 
class Post extends Component {

  componentDidMount() {
    // calling the new action creator
    this.props.getData();
  }

  render() {
    return (
        <ul>
          {this.props.articles.map(el => (
            <li key={el.id}>{el.title}</li>
          ))}
        </ul>
      );
    }
  
}

const mapStateToProps = (state) => {
    return {
      articles: state.remoteArticles.slice(0, 10)
    };
  }

export default connect(
    mapStateToProps,
  { getData }
)(Post);
