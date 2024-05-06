import React from "react";

export const Team = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Meet the Team</h2>
          <div >
        {props.data ? 
  props.data.map((d, i) => (
    d.name == "Dr. Nipjyoti Bharadwaj" ? (
      <div key={`${d.name}-${i}`} className="col-md-3 col-sm-6 team">
  <div style={{ textAlign: "center" }}>
    <img src={d.img} alt="..." className="team-img" style={{ width: "200%", maxWidth: "500px", display: "block", margin: "0 auto" ,marginLeft:"220px"}} />
    <div style={{textAlign: "center" ,marginLeft:"270px" ,width :"200px"}}>
      <h4 >{d.name}</h4>
      <p>{d.job}</p>
    </div>
  </div>
</div>

    ) : null
  )) 
  : "loading"}

        </div>
        
        </div>
  
     
   
        <div id="row">
        {props.data ? 
  props.data.map((d, i) => (
    d.name !== "Dr. Nipjyoti Bharadwaj" ? (
      <div key={`${d.name}-${i}`} className="col-md-3 col-sm-6 team">
        <div className="thumbnail">
          <img src={d.img} alt="..." className="team-img" style={{width: "200px",height: "250px"}} />
          <div className="caption">
            <h4>{d.name}</h4>
            <p>{d.job}</p>
          </div>
        </div>
      </div>
    ) : null
  )) 
  : "loading"}

        </div>
      </div>
    </div>
  );
};
