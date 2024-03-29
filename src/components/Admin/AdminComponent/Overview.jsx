import React from "react";
import { IoNewspaperOutline } from "react-icons/io5";
import './Overview.css'
import LoadingIcons from 'react-loading-icons'
const Overview = (props) => {

  const overviewData = props?.overviewData;
  if(!overviewData) return null ; 
  return <article className="dashboard-overview" style={{backgroundColor:overviewData?.statsBackground, color:overviewData?.color, borderBottom:`6px solid ${overviewData?.color}`}} > 
  <div className="stats-row">
    {
      props.stats!=undefined && props.stats!=null ? <span>{props?.stats}</span>:  <LoadingIcons.ThreeDots
      style={{
        height: '1.8rem',
        fontWeight: 'bold'
      }}
      fill={overviewData?.color || 'defaultColor'}
      speed={1} 
    />

    }
    
    <div className="icon-holder" style={{backgroundColor:overviewData?.iconBackground}} > 
     {overviewData?.icons}
    </div>
  </div>
  <span className="stats-title">{props?.title}</span>
  </article>;
};

export default Overview;

//statsBackground
//color border
//icon background
{/* <article className="dashboard-overview" style={{backgroundColor:props.statsBackground,color:color,borderBottom:`6px solid {color}`}}> 
  <div className="stats-row">
    <span>27</span>
    <IoNewspaperOutline className="stats-icon" style={{backgroundColor:props.iconBackground}}/>
  </div>
  <span className="stats-title">Pending Application</span>
  </article>; */}