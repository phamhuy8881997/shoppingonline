import './App.css';
import React, {Component} from 'react';
/*--------------------------------------*/
import HeaderTop from './component/header/headerTop';
//import Header from './component/header/header';
//import Content1 from './component/content/content';
//import Foodter from './component/foodter/foodter';
//import { toast } from 'react-toastify';

import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import route from './router';
/*--------------------------------------*/
class App extends Component {
  render(){
    return(
    	
      <div id="crollpage">
      <h1 id='display'>TRANG WEB CHƯA HỖ TRỢ CHO ĐIỆN THOẠI VÀ MÁY TÍNH BẢNG, XIN DÙNG MÁY TÍNH ĐỂ TRUY CẬP TRANG WEB</h1>
      
      	<Router>
      	<HeaderTop />
	        {/*------------route------------*/}
	        {this.showRoute(route)}
	        {/*------------route------------*/}
        </Router>
      </div>


      )
  }
  showRoute=(routes)=>{
  	var resuleR=''
  	resuleR=routes.map((route,index)=>{
  		return <Route key={index}
  					  path={route.path}
  					  exact={route.exact}
  					  component={route.main}
  					    />
  	})
  	return <Switch>{resuleR}</Switch>
  }
}
export default App;

    
