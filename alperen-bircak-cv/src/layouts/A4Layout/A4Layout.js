import React from "react";
import './A4Layout.scss';

const A4Layout = ({children})=>{
  return (<div className="a4-container">
    <div className="a4-layout">
      {children}
    </div>
  </div>)
}

export default A4Layout;