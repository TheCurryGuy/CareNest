import React from 'react';
import Spline from '@splinetool/react-spline';
// https://prod.spline.design/p4-sMiDSYTp9GtBa/scene.splinecode
// https://prod.spline.design/uNngMMaJPgyc6vIr/scene.splinecode
function Landing() {
  return (
    <div className="landing-container">
      <Spline className='scene' scene="https://prod.spline.design/uNngMMaJPgyc6vIr/scene.splinecode" />
    </div>
  );
}

export default Landing;
