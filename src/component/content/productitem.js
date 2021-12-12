import './content.css';
import {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as action from "./../../redux/action/index";
//import ReactPaginate from 'react-paginate';
import { toast } from 'react-toastify';

class ProductItem extends Component {

  /*===================================================================================*/
  render(){
    var {product}=this.props;
    //console.log(product);
    return(
           <div className="col-xs-6 col-sm-6 col-md-4 col-lg-3" id="cartAPI">

               <div className="card bg-primary">

                  <img src={require(`./../../image/img/${product.image}.jpg`).default} className="card-img-top" alt={product.image}/>
                   
                  <div className="card-body">
                    <p className="card-text">{product.name}</p>
                    <p className="card-text">{product.price} USD</p>
                    <button type="button" className="btn btn-danger" onClick={()=>this.onlick(product.id,product.name)}>
                    <i className='fa fa-shopping-cart' style={{fontSize:'19px',color:'#0ff'}}></i>
                    </button>
                    <Link to={`/product/${product.id}/select`} type="button" className="btn btn-warning" >Thông Tin</Link>
                  </div>
                  {this.showSale()}
                </div> 
           </div>
      )
  }
  /*----------------------------*/
  onlick=(id,name)=>{
  	//window.alert('thêm một sản phẩm vào giỏ hàng');
  	toast.info(`🦝 thêm ${name} vào giỏ hàng thành công `,{
				position: "top-center",
				});
    this.props.getProductId(id);
  }
  /*-----------------------------*/
  /*======show image sale========*/
  showSale=()=>{
   var resule='';
   var {product}=this.props;
   var saleOF= parseInt(product.sale); 
   if(saleOF===1){
     resule= <img id='sale-product' src={require('./../../image/gif/gif2.gif').default} className="card-img-top" alt="..."/>
   }else if(saleOF===2){
     resule= <img id='sale-product2' src={require('./../../image/img/noSale1.png').default} className="card-img-top" alt="..."/>
   }else{
     resule= <img id='sale-product1' src={require('./../../image/img/noSale.png').default} className="card-img-top" alt="..."/>
   }
    return resule;
  }
  /*======show image sale========*/
}
var mapStateToProp=(state)=>{
    return{}
}
var mapDispathToProp=(dispath,props)=>{
    return{
        getProductId:(id)=>{
          dispath(action.get_product_id(id));
        },
    }
}
export default connect(mapStateToProp,mapDispathToProp)(ProductItem);