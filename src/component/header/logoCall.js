import './header.css';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class LogoCall extends Component {
  render(){
    return(
      <React.Fragment>
        <div className="logo-call">
        	<h6><i className='fa fa-phone fa-spin'></i>
          <p>
          SDT: 0909123123
          </p></h6>
          
        </div>

        <input type="checkbox" id="check1"/>

        <div className="menu-hd">
          <label htmlFor="check1">
             <i className='fa fa-snowflake-o fa-spin'></i>
          </label>
          <label htmlFor="check1">
             <i className='fa fa-times-circle fa-spin'></i>
          </label>
          <div className="menu-panel">
           <Link to="/product/6/select"><i className='fa fa-ge'></i><span>APPLE</span></Link>
           <Link to="/product/14/select"><i className='fa fa-ge'></i><span>SAMSUNG</span></Link>
           <Link to="/product/18/select"><i className='fa fa-ge'></i><span>NOKIA</span></Link>
           <Link to="product/30/select"><i className='fa fa-ge'></i><span>XIAOMI</span></Link>
           <Link to="/product/41/select"><i className='fa fa-ge'></i><span>SONY</span></Link>
           <a href="/"><i className='fa fa-home'></i><span>HOME</span></a>
          </div>
        </div>
      </React.Fragment> 
      )
  }
  
}
export default LogoCall;