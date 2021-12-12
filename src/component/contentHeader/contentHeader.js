import './contentHeader.css';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as action from "./../../redux/action/index";
import {Link} from 'react-router-dom';
/*----------------------------------*/
import Iphone from './productSP/iphone';
import Nokia from './productSP/nokia';
import Samsung from './productSP/samsung';
import Xiaomi from './productSP/xiaomi';
import Oppo from './productSP/oppo';
import Tablet from './productSP/tablet';

import { toast } from 'react-toastify';
/*-----------------------------------------------------------------*/
class ContentHeader extends Component {

  render(){
  	//var {productCartShop}=this.props;
  	//console.log(productCartShop);
  	//const mydata=localStorage.getItem('ITEM');
  	//console.log(mydata);
    return(
      <React.Fragment>
       <div className="row headerCart">
       	<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
       	  <nav className="navbar navbar-default" role="navigation">
	        <div className="container-fluid">
	          {/* Brand and toggle get grouped for better mobile display */}
	          <div className="navbar-header">
	            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
	              <span className="sr-only">Toggle navigation</span>
	              <span className="icon-bar" />
	              <span className="icon-bar" />
	              <span className="icon-bar" />
	            </button>
	          </div>
	          {/* Collect the nav links, forms, and other content for toggling */}
	          <div className="collapse navbar-collapse navbar-ex1-collapse">
	            <ul className="nav navbar-nav navbar-right">
	            {/*+++++++++++++++++++++++++++++*/}
	              <li className="dropdown">
	                <a href="# " className="dropdown-toggle" data-toggle="dropdown">Sản Phẩm Khác</a>
	                <ul className="dropdown-menu cartSP">
	                  <li><p onClick={()=>this.onlick('loa')}>Loa</p></li>
	                  <li><p onClick={()=>this.onlick('mayin')}>Máy In</p></li>
	                  <li><p onClick={()=>this.onlick('camera')}>Camera</p></li>
	                  <li><p onClick={()=>this.onlick('sim')}>Sim Điện Thoại</p></li>
	                  <li><p onClick={()=>this.onlick('all')}>Tất Cả</p></li>
	                </ul>
	              </li>
	            {/*+++++++++++++++++++++++++++++*/}
	              <li className="dropdown">
	                <a href="# " className="dropdown-toggle" data-toggle="dropdown">Phụ Kiện</a>
	                <ul className="dropdown-menu cartSP">
	                  <li><p onClick={()=>this.onlick('tainghe')}>Tai Nghe</p></li>
	                  <li><p onClick={()=>this.onlick('sacduphong')}>Sạc Dự Phòng</p></li>
	                  <li><p onClick={()=>this.onlick('dongho')}>Đồng Hồ Thông Minh</p></li>
	                  <li><p onClick={()=>this.onlick('danmanhinh')}>Dán Màn Hình</p></li>
	                  <li><p onClick={()=>this.onlick('oplung')}>Ốp Lưng</p></li>
	                  <li><p onClick={()=>this.onlick('all')}>Tất Cả</p></li>
	                </ul>
	              </li>
	            {/*+++++++++++++++++++++++++++++*/}
	              <li className="dropdown">
	                <a href="# " className="dropdown-toggle" data-toggle="dropdown">Máy tính bảng</a>
	                <ul className="dropdown-menu cartSP2">
	                  <Tablet />
	                </ul>
	              </li>
	            {/*+++++++++++++++++++++++++++++*/}
	              <li className="dropdown">
	                <a href="# " className="dropdown-toggle" data-toggle="dropdown">Máy Tính</a>
	                <ul className="dropdown-menu cartSP">
	                  <li><p onClick={()=>this.onlick('laptopdell')}>DELL</p></li>
	                  <li><p onClick={()=>this.onlick('laptopasus')}>ASUS</p></li>
	                  <li><p onClick={()=>this.onlick('laptophp')}>HP</p></li>
	                  <li><p onClick={()=>this.onlick('laptoplg')}>LG</p></li>
	                  <li><p onClick={()=>this.onlick('laptopacer')}>ACER</p></li>
	                  <li><p onClick={()=>this.onlick('macbook')}>MACBOOK</p></li>
	                </ul>
	              </li>
	            {/*+++++++++++++++++++++++++++++*/}
	              <li className="dropdown">
	                <a href="# " className="dropdown-toggle" data-toggle="dropdown">Điện Thoại</a>
	                <ul className="dropdown-menu cartSP1">
	                	<div className="row">
	                		<div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
	                			<Iphone />
	                		</div>
	                		<div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
	                			<Nokia />
		                	</div>
	                  		<div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
	                  			<Samsung />
	                  		</div>
	                  		<div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
	                  			<Oppo />
	                  		</div>
		                  	<div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
		                  		<Xiaomi />
		                  	</div>
		                  	<div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
		                  		
		                  	</div>
	                	</div>
	                	
	                </ul>
	              </li>
	            {/*+++++++++++++++++++++++++++++*/}
	              <li className="dropdown">
	                <a href="# " className="dropdown-toggle togCart" data-toggle="dropdown"><i className='fa fa-cart-arrow-down'></i></a>
	                <ul className="dropdown-menu menuCart">
	                	<h3>Giỏ Hàng</h3>
	             
	                  	{this.showTable()}
	                    
	                </ul>
	              </li>
	            {/*+++++++++++++++++++++++++++++*/}
	            {/*+++++++++++++++++++++++++++++*/}
	            </ul>
	          </div>{/* /.navbar-collapse */}
	        </div>
	      </nav>
       	</div>
       </div>

      <div className="row produc">
      	<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
      	  <button type="button" className="btn btn-success" onClick={()=>this.onlick('apple')}>APPLE</button>
      	  <button type="button" className="btn btn-success" onClick={()=>this.onlick('samsung')}>SAMSUNG</button>
      	  <button type="button" className="btn btn-success" onClick={()=>this.onlick('nokia')}>NOKIA</button>
      	  <button type="button" className="btn btn-success" onClick={()=>this.onlick('oppo')}>OPPO</button>
      	  <button type="button" className="btn btn-success" onClick={()=>this.onlick('xiaomi')}>XIAOMI</button>
      	  <button type="button" className="btn btn-danger" onClick={()=>this.onlick('all')}><p>ALL</p></button>
      	  <input type="text" className="form-control" name='onserch' value={this.state.onserch}  onChange={this.Onchange} placeholder="Tìm kiếm..." />
      	  <button type="button" className="btn btn-primary"><i className='fa fa-search' onClick={this.ONsearch}></i></button>
      	</div>
      </div>
      </React.Fragment> 
      )
  }
  /*==================================================*/
  constructor(props){
  	super(props);
  	this.state={
  		onserch:'',
  	}
  }
  /*============nhan du lieu input======================*/
  Onchange=(event)=>{
  		var target=event.target;
  		var name=target.name;
  		var value=target.value;
  		this.setState({
  			[name]:value
  		})
  }
  /*============keyword serch===========================*/
  ONsearch=()=>{
  	//console.log('input',this.state.onserch);
  	var {onserch}=this.state;
  	this.props.onserch(onserch.toLowerCase().trim());
  }
  /*========keyword tim kiem=============================*/
  onlick=(value)=>{
  	this.props.filter(value);
  }
  /*==============show du lieu cart shop=================*/
  onShowCart=(cartshop)=>{
  	var resule='';
  	if(cartshop.length >0 ){
  		resule=cartshop.map((item,index)=>{
  			return <tr key={index} className="text-center">
          				<td><p>{index+1}</p></td>
          				<td><p>{item.product.name}</p></td>
          				<td>
          				<img src={require(`./../../image/img/${item.product.image}.jpg`).default} alt="..." id='CssImage'/>
          				</td>
          				<td><p>{item.sll}</p></td>
          				<td><p>{item.product.price} USD/1 SP</p></td>
          				<td>
	          				<p>
	          					<button type="button" id="ondeleteToCartShop" className="btn btn-danger" onClick={()=>this.deleteProductCart(item.product.id)}>Xóa</button>
	          				</p>
          				</td>
          			</tr>
    
  			})
  	}else{}
  	return resule;
  }
  /*=====showTotal============================*/
showTotal=()=>{
	var toltal=0;
	var productCartShop =JSON.parse(localStorage.getItem('ITEM'));
	for(var i=0;i<productCartShop.length;i++){
		toltal+=productCartShop[i].product.price * productCartShop[i].sll;
	}
	//console.log(toltal);
	return <p>{toltal} USD</p>;
	}
 /* ================showTable===================*/
 showTable=()=>{
 	var showTB='';
 	let productCartShop1 = JSON.parse(localStorage.getItem('ITEM'));
 	//var {productCartShop}=this.props;
 	if(productCartShop1===null){
 		showTB=<h1>chưa có sản phẩm trong giỏ hàng</h1>
 	}else{
 		showTB =  <li>
 					<table className="table table-bordered table-hover">
	                  		<thead>
	                  			<tr >
	                  				<th>STT</th>
	                  				<th>Sản Phẩm</th>
	                  				<th>image</th>
	                  				<th>Số Lượng</th>
	                  				<th>Đơn giá</th>
	                  				<th>Xóa</th>
	                  			</tr>
	                  		</thead>
	                  		<tbody className='text-center'>
	               
			          			{this.onShowCart(productCartShop1)}

			          			<tr >
			          				<td>Tổng tiền</td>
			          				<td></td>
			          				<td></td>
			          				<td></td>
			          				<td>{this.showTotal()}</td>
			          				<td></td>
			          			</tr>

	                  		</tbody>
	              </table>
	              <Link to='/shop/by/product' type="button" className="btn btn-primary" id='btnBuyNow'>Thanh Toán</Link>
	              <button type="button" className="btn btn-warning" id='btnDele' onClick={()=>this.onDeleteAll()} >Xóa Tất Cả</button>
	            </li>
 	}
 	return showTB;
 }
 /* ================showTable===================*/
 /*==================delete product shop========*/
 deleteProductCart=(id)=>{
 	this.props.deleteOnShop(id);
 	toast.success(`🦝 xóa sản phẩm trong giỏ hàng thành công ! `,{position: "bottom-left",autoClose: 3000});
 	/*if(window.confirm('bạn muốn xóa sản phẩm này')){
 		this.props.deleteOnShop(id);
 		toast.success(`🦝 xóa sản phẩm trong giỏ hàng thành công ! `,{position: "top-center",autoClose: 3000});
 	}*/
 }
  /*==================delete product shop========*/
  /*==================delete all cartshop========*/
  onDeleteAll=()=>{
  	if(window.confirm('ban có chắc muốn xóa tất cả??')){
  		this.props.deleteAllshop();
  		toast.dark(`🦝 xóa toàn bộ sản phẩm trong giỏ hàng thành công ! `,{position: "bottom-left",autoClose: 3000});
  	}
  }
  /*==================delete all cartshop========*/
}
/*==========================================================================*/

var mapStateToProp=(state)=>{
    return{
        productCartShop:state.cartshop,
    }
}
var mapDispathToProp=(dispath,props)=>{
    return{
    	deleteOnShop:(id)=>{
    		dispath(action.delete_oncartshop(id))
    	},
    	deleteAllshop:()=>{
    		dispath(action.delete_all_shop())
    	},
    }
}
export default connect(mapStateToProp,mapDispathToProp)(ContentHeader);
