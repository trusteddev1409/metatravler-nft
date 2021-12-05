import React from "react";

class Ship extends React.Component{
    render(){
        return(
            <svg className="g-svg"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="9" />  <circle cx="12" cy="12" r="3" />  <line x1="12" y1="9" x2="20.4" y2="9" />  <line x1="12" y1="9" x2="20.4" y2="9" transform="rotate(120 12 12)" />  <line x1="12" y1="9" x2="20.4" y2="9" transform="rotate(240 12 12)" /></svg>
        )
    }
}

export default Ship;