import React from "react";
import ("./ClickImage.css");


const ClickImage= props =>{
    console.log(props)
    return (
        <div   
        role="img"
        aria-label="Click Image"
        onClick = {() => props.handleClick(props.id)}
        style ={{
            width: 200,
            height: 150,
            backgroundImage : `url("${props.image}")`
        }}
        className= "clickImage"
        /> 
)}

export default ClickImage;