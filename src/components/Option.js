import React from 'react';

const Option = (props) => (
        <li className="option">
            <p className="option__text">{props.count}. {props.option}</p >
            <button
            className="button button--link" 
            onClick={(e) => {props.handleDeleteOption(props.option)}}>
            remove
            </button>
        </li>
    )


export default Option;