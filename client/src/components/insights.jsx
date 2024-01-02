import React from "react";
import './index.css';


const Insights = (props) =>{
    return(
        <div className="insights">
            <a href={props.url}>
            <img src={`${import.meta.env.VITE_BASE_URL}`+props.image}></img>
        </a>
        </div>
    )
}
export default Insights;