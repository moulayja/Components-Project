import React from 'react';
import './App.css';


 const  CommentDetail = props => {
    var date = new Date().toJSON().slice(0,10);
        return (
        <div className="ui container">
            <div className="ui threaded comments">
                <div className="comment">
                    <a className="avatar"><img src={props.image} alt ="faker photos"/></a>
                    <div className="content">
                    <a className="author">{props.name}</a>
                    <div className="metadata">
                    <span className="date">Today at {date}</span>
                    </div>
                    <div className="text">
                        {props.comment}
                    </div>
                        {props.children}
                    </div> 
                </div> 
            </div> 
        </div> 
    )
}

export default CommentDetail;
