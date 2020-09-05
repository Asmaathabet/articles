import React from 'react'; 
import {connect } from 'react-redux'; 


const mapStateToProps = state => {
    return { articles: state.articles}; 
};

const connectedList = ({ articles }) => {
    return (
        <ul>
        {articles.map(e => <li key={e.id}>{e.title}</li>)}
        </ul>
    )
} 
const List = connect(mapStateToProps)(connectedList);

export default List; 
