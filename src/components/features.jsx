import React from "react";

export const Features = (props) => {
  const handleIconClick = (title) => {
    // Do something when the icon is clicked, for example:
    console.log(`Icon clicked for ${title}`);
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
                  <a onClick={() => handleIconClick(d.title)} style={{ cursor: 'pointer'}}>
                    <i className={d.icon} style={{ transition: 'transform 0.3s' }}></i>
                  </a>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
      <style jsx>{`
        i:hover {
          transform: scale(1.5); /* Adjust the scale factor as needed */
        }
      `}</style>
    </div>
  );
};
