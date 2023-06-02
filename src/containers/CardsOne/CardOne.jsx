/* eslint-disable react/prop-types */
import './CardOne.css';
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { options } from './optionData'

function Option( props ) {
  const [active, setActive] = useState(false);
  
    // $(".option").click(function () {
    //   $(".option").removeClass("active");
    //   $(this).addClass("active");
    // });
  
  return (
    // <>
      <div className={`option ${active ? 'active' : ''}`} style={{'--optionBackground': `url(${props.background})`}} onClick={() => setActive(!active)}>
        <Link to="/card">
          <div className="shadow"></div>
          <div className="label">
            <div className="icon">
              <i className={props.icon}></i>
            </div>
            <div className="info">
              <div className="main">{props.main}</div>
              <div className="sub">{props.sub}</div>
            </div>
          </div>
        </Link>
      </div>
    // </>
  )
}

export const CardOne = () => {
  return (
    <>
      <div className="body">
        <div className="options">
          {options.map(option => (
            <Option key={option.id} {...option} />
          ))}
        </div>
      </div>
    </>
  );
};
