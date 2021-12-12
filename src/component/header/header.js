import './header.css';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import * as action from "./../../redux/action/index";
import {connect} from 'react-redux';
//import { toast } from 'react-toastify';
/*+++++++++++++++image+++++++++++++++++++++++++++++*/
import c1 from './../../image/img/img11.jpg';
/*+++++++++++++++image+++++++++++++++++++++++++++++*/
/*-------gif----------------*/
import g1 from './../../image/gif/gif1.gif';
/*-------gif----------------*/
class Header extends Component {

	onToscroll=()=>{
  		window.scrollTo(0,950);
  	}
  constructor(props){
  	super(props);
  	this.state={
  		data:[],
  	}
  }
  componentDidMount(){
  	this.props.getdatapage();
  	this.props.getdatanotify();
  }
  showCourasel=()=>{
  	let resule='';
  	let {datapage}=this.props;
  	resule=datapage.map((data,index)=>{
  		return <div className="item" key={index}>
	            <img src={data.img} alt="..."  />
	            <div className="container">
	              <div className="carousel-caption">
	                <h1>{data.name}</h1>
	                <h4 style={{color:'aqua'}}>{data.price} USD</h4>
	                <p><Link className="btn btn-lg btn-primary" to={`/product/${data.tolink}/select`} role="button" onClick={()=>this.onToscroll()} >Buy Now</Link></p>
	              </div>
	            </div>
	          </div>

  	})
  	return resule;
  }

  render(){
  	/*=====================================*/
  	var txtPN1='Bảng Tin';
  	var txtPN2='Bảng Tin';
  	var {notifypage}=this.props;
  	/*=====================================*/
    return(
      <React.Fragment>
      
      <div className="header1">
     {/*============NAVBAR=====*/}
  	<div className="headerNav ">
  		<div className="row">
  			<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
  				<nav className="navbar navbar-default" role="navigation">
		        	<div className="container-fluid">
		        		
		        		<div className="navbar-header">
		        			<button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
		        				<span className="sr-only">Toggle navigation</span>
		        				<span className="icon-bar"></span>
		        				<span className="icon-bar"></span>
		        				<span className="icon-bar"></span>
		        			</button>
		        		</div>
		        
		          
		        		<div className="collapse navbar-collapse navbar-ex1-collapse">
		        			<ul className="nav navbar-nav navbar-right">
		        				<li><Link to="/admin/99/admin" >ADMIN</Link></li>
		        				<li className="dropdown">
		        					<a href="# " className="dropdown-toggle" data-toggle="dropdown">
		        						<i className='fa fa-server' style={{fontSize:'26px',color:'red'}}></i>
		        						<b className="caret"></b>
		        					</a>
		        					<ul className="dropdown-menu">
		        						<li><Link to="/admin/99/admin" >ADMIN</Link></li>
		        						<li><a href="https://web-0986-data-0238-admin.web.app/">BuyProduct</a></li>
		        						<li><Link to="/notify">Notify</Link></li>
		        						<li><Link to="/abcd">Email Us</Link></li>
		        					</ul>
		        				</li>
		        			</ul>
		        		</div>

		        	</div>
		        </nav>
  			</div>
  		</div>
  	</div>
  	{/*=======CAROUSEL======*/}
  	<div className="row headerCarou text-center">
  		<div className="col-xs-12 col-sm-12 col-md-2 col-lg-2">
  			<div className="panel panel-danger p1">
  				<div className="panel-heading">
  					<h3 className="panel-title">{txtPN1}</h3>
  				</div>
  				<div className="panel-body" >
  					{notifypage[0]===undefined?(<ul></ul>):(
  							<ul>
		  						<li><span>{notifypage[0].notify1[0]}</span></li>
		  						<li><span>{notifypage[0].notify1[1]}</span></li>
		  						<li><span>{notifypage[0].notify1[2]}</span></li>
		  						<li><span>{notifypage[0].notify1[3]}</span></li>
		  					</ul>
  						)}
  					
  				</div>
  			</div>
  		</div>
  		<div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
  		  
	  	  <div id="carousel-id" className="carousel slide" data-ride="carousel">
	        <ol className="carousel-indicators">
	          <li data-target="#carousel-id" data-slide-to={0} className="active atv1" />
	          <li data-target="#carousel-id" data-slide-to={1} className="atv1" />
	          <li data-target="#carousel-id" data-slide-to={2} className="atv1" />
	          <li data-target="#carousel-id" data-slide-to={3} className="atv1" />
	          <li data-target="#carousel-id" data-slide-to={4} className="atv1" />
	          <li data-target="#carousel-id" data-slide-to={5} className="atv1" />
	        </ol>
	        <div className="carousel-inner">
		        <div className="item active">
		            <img src={c1} alt="..."  />
		            <div className="container">
		              <div className="carousel-caption">
		                
		              </div>
		            </div>
		        </div>
	        	{this.showCourasel()}
	        </div>
	        <a className="left carousel-control" href="#carousel-id" data-slide="prev"><span className="glyphicon glyphicon-chevron-left" /></a>
	        <a className="right carousel-control" href="#carousel-id" data-slide="next"><span className="glyphicon glyphicon-chevron-right" /></a>
	      </div>
  		</div>
  		<div className="col-xs-12 col-sm-12 col-md-2 col-lg-2">
  			<div className="panel panel-danger p2">
  				<div className="panel-heading">
  					<h3 className="panel-title">{txtPN2}</h3>
  				</div>
  				<div className="panel-body">
  					{notifypage[0]===undefined?(<ul></ul>):(
  							<ul>
		  						<li><span>{notifypage[0].notify2[0]}</span></li>
		  						<li><span>{notifypage[0].notify2[1]}</span></li>
		  						<li><span>{notifypage[0].notify2[2]}</span></li>
		  						<li><span>{notifypage[0].notify2[3]}</span></li>
		  					</ul>
  						)}
  				</div>
  			</div>
  		</div>
  	</div>
  	{/*=======JUMBOTRON==========*/}
  	<div className="headerJum">
  		<div className="jumbotron text-center">
  			<div className="container">
  				<div className="row">
  					<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
  						<img src={g1} alt="..." />
  					</div>
  					<div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
  						<h3>Siêu Khuyến Mãi</h3>
  						{notifypage[0]===undefined?(<p></p>):(
  						<div>
  							<p>{notifypage[0].notify3[0]}</p>
	  						<Link to={`/product/${notifypage[0].notify3[1]}/select`} className="btn btn-primary btn-lg" onClick={()=>this.onToscroll()}>
	  						  Buy Now
	  						</Link>
  						</div>
  						)}
  						
  					</div>
  					<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
  						<img src={g1} alt="..." />
  					</div>
  				</div>
  				
  			</div>
  		</div>
  	</div>
  	{/*=================*/}
  	</div>
      </React.Fragment> 
      )//return
  }
}
var mapStateToProp=(state)=>{
	return{
		datapage:state.datapage,
		notifypage:state.notifypage,
	}
}
var mapDispathToProp=(dispath,props)=>{
	return{
		getdatapage:()=>{
			dispath(action.get_data_page_api())
		},
		getdatanotify:()=>{
			dispath(action.get_data_notify_api());
		},
	}
}
export default connect(mapStateToProp,mapDispathToProp)(Header);

