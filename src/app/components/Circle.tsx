"use client"
import React, { useEffect } from 'react';
import './circle.css';

const Circle = () => {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = "https://awards.infcdn.net/2024/circle_v3.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  const handleClick = (event: any) => {
    if (event.target.nodeName.toLowerCase() !== 'a') {
      window.open(event.currentTarget.querySelector('.circle_bw_link').href);
    }
  };

  return (
    <div id="circle_bw" data-length="29" className="circle_bw_black" onClick={handleClick}>
      <p className="circle_bw_year">2024</p>
      <div className="circle_bw_name">
        <a className="circle_bw_link" target="_blank" rel="noopener noreferrer" href="https://restaurantguru.com/Burritos-De-Kadas-Izmir-2">
          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="178px" height="178px" viewBox="0 0 178 178">
            <defs>
              <path id="circle_bw_name-arc" d="M 12 89 a 77 77 0 0 0 154 0"></path>
            </defs>
            <text className="circle_bw_name_txt" fill="#000" textAnchor="middle">
              <textPath startOffset="50%" xlinkHref="#circle_bw_name-arc">Burritos De Kadas</textPath>
            </text>
          </svg>
        </a>
      </div>
      <div className="circle_bw_nom">
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="200px" height="200px" viewBox="0 0 200 200">
          <defs>
            <path id="circle_bw_nom-arc1" d="M 30 100 a 70 70 0 1 1 140 0"></path>
          </defs>
          <text className="circle_bw_nom_txt" fill="#000" textAnchor="middle">
            <textPath startOffset="50%" xlinkHref="#circle_bw_nom-arc1">Recommended</textPath>
          </text>
        </svg>
      </div>
      <a className="circle_bw_home" style={{ fontSize: 0 }} href="https://restaurantguru.com" target="_blank" rel="noopener noreferrer">Restaurant Guru</a>
    </div>
  );
};

export default Circle;
