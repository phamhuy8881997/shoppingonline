import './productSelect.css';
import React, {Component} from 'react';

import * as action from "./../../redux/action/index";
import {connect} from 'react-redux';

class ProductSelect extends Component {
	/*=======================================*/
  componentDidMount(){
       this.props.getProductsAPI();
   }
  /*=======================================*/
  showItemSelect=(products,id)=>{
    var resule='';
    id=id.toString();
    var resule1=products.filter((product)=>{
      return product.id===id;
    })
    resule=resule1.map((product,index)=>{
        return  <div className="row" key={index}>
                  <h1>Thông Tin Sản Phẩm---{product.name}</h1>
                  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <div className="card bg-danger">
                      <img src={require(`./../../image/img/${product.image}.jpg`).default} className="card-img-top" alt="..."/>
                      <div className="card-body">
                        <p className="card-text">{product.name}</p>
                        <p className="card-text">--{product.price}--USD</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <div className="panel panel-danger">
                      <div className="panel-heading">
                        <h3 className="panel-title">Thông Tin</h3>
                      </div>
                      <div className="panel-body">
                        <ul>
                          <li>{product.descript}---{product.tagname}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <h3>Video Giới Thiệu Sản Phẩm</h3>
                    <video width="450" controls>
                      <source src={require(`./../../image/video/${product.tagname}.mp4`).default} type="video/mp4"/>
                    </video>
                  </div>
                </div>
    })
    return resule;
  }
  /*=======================================*/
  onclick=()=>{
    var {history}=this.props;
    history.goBack();
  }
  /*------------------  */
  onToBuy=()=>{
  	var {history,match}=this.props;
    var id=match.params.id;
    this.props.getProductId(id);
    window.alert('thêm giỏ hàng thành công!!')
    history.goBack();
  }
  /*-----------------	*/
  render(){
  	var {products}=this.props;
    var {match}=this.props;
    var id=match.params.id;
    return(
      <React.Fragment>
        <div className="productSelect text-center" id="style-2">
          <div className='selectItem'>
            {this.showItemSelect(products,id)}
            <div className='buy-product'>
              <button type="button" className="btn btn-primary" onClick={this.onclick}>Quay Lại</button>
              <button type="button" className="btn btn-primary" onClick={this.onToBuy}>Mua hàng</button>
            </div>
          </div>
        </div>
      </React.Fragment> 
      )
  }
  /*=======================================*/
}

var mapStateToProp=(state)=>{
    return{
        products:state.products,
    }
}
var mapDispathToProp=(dispath,props)=>{
    return{
        getProductsAPI:()=>{
            dispath(action.get_products_api());
            /*lấy tất cả sản phẩm*/
        },
        getProductId:(id)=>{
          dispath(action.get_product_id(id));
          /*lấy 1 san pham*/
        },
    }
}
export default connect(mapStateToProp,mapDispathToProp)(ProductSelect);