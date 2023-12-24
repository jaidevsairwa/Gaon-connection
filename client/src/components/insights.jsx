import React from "react";
import './index.css';


const Insights = (props) =>{
    return(
        <div className="insights">
            <img src={`http://45.126.126.209:1337`+props.image}></img>
        </div>
    )
}
export default Insights;