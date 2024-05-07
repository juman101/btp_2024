import React, { useState } from "react";

export const Features = (props) => {
  // State to track the clicked icon
  const [clickedIcon, setClickedIcon] = useState(null);

  // Function to handle click event on icon
  const handleClick = (title) => {
    setClickedIcon(title);
  };

  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Locations</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
                  {/* Use anchor tag to navigate to the desired page */}
                  <a
                    href={`/locationpg/${d.title.toLowerCase()}`}
                    style={{ textDecoration: "none", color: clickedIcon === d.title ? "red" : "black" }}
                    onClick={() => handleClick(d.title)}
                  >
                    <i className={d.icon} style={{ transition: "transform 0.3s" }}></i>
                    <h3>{d.title}</h3>
                    <p>{d.text}</p>
                  </a>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
      <style jsx>{`
        i:hover {
          transform: scale(1.5);
        }
      `}</style>
    </div>
  );
};
