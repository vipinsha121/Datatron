import React from 'react';
import './HIWLine.scss';
import StartICon from 'assets/images/start.svg'; //eslint-disable-line

const HIWLine = () => (
  <div className="dt-vertical_line-container">
    <img src={StartICon} alt="startIcon" />
    <div className="virtical_line" />
    <img src={StartICon} alt="replayIcon" />
  </div>
);

export default HIWLine;
