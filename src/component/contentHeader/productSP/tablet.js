import './spPhone.css';
import React, {Component} from 'react';

class Tablet extends Component {
  render(){
    return(
      <React.Fragment>
      <div className="itemCartH">
      <div className="row">
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <ul>Samsung
          <li><a href="# ">Samsung Tab A5</a></li>
          <li><a href="# ">Samsung Tab A7</a></li>
          <li><a href="# ">Samsung Tab S6</a></li>
          <li><a href="# ">Samsung Tab S7</a></li>
          <li><a href="# ">Samsung Tab S7 Plus</a></li>
          </ul>
        </div>
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <ul>Ipad
          <li><a href="# ">Ipad Air 2019</a></li>
          <li><a href="# ">Ipad Pro 2019</a></li>
          <li><a href="# ">Ipad Air 2020</a></li>
          <li><a href="# ">Ipad Pro 2020</a></li>
          <li><a href="# ">Ipad Pro 2018</a></li>
          <li><a href="# ">Ipad Pro 2017</a></li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <ul>Huawei
          <li><a href="# ">Huawei tab3</a></li>
          <li><a href="# ">Huawei tab4</a></li>
          <li><a href="# ">Huawei tab5</a></li>
          <li><a href="# ">Huawei tab6</a></li>
          </ul>
        </div>
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <ul>Lenevo
          <li><a href="# ">Lenevo Tab M10</a></li>
          <li><a href="# ">Lenevo Tab M9</a></li>
          <li><a href="# ">Lenevo Tab M8</a></li>
          <li><a href="# ">Lenevo Tab M7</a></li>
          </ul>
        </div>
      </div>
      </div>
      </React.Fragment> 
      )
  }
}
export default Tablet;