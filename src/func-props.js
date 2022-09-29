import React from 'react';

export const MsgBox = (props) => {
    const divStyle = {
        margin:'10px',
        padding:'5px',
        color:props.color,
        backgroundColor:props.bgColor,
        fontSize:props.fontSize,
        border:props.border
    }

    return <div style={divStyle}>{props.text}</div>
}

export const RedMsgBox = (props) => {
    const divStyle = {
        margin:'10px',
        padding:'5px',
        color:props.color,
        backgroundColor:'red',
        fontSize:props.fontSize,
        border:props.border
    }

    return <div style={divStyle}>{props.text}</div>
}