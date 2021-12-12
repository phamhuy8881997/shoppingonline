
import React,{Component} from 'react';
import * as action from "./../action/index";
import {connect} from 'react-redux'

//import ContentHeader from './../../component/contentHeader/contentHeader';
import ContentTop from './../../component/content/contentTop';
import ProductItem from './../../component/content/productitem';


class ContentTopContainer extends Component {
   componentDidMount(){
       this.props.getProductsAPI();
   }
   /*componentWillReceiveProps(nextprops){
   		this.props.getProductsAPI();
   }*/
  render(){
      var {products}=this.props //prop tu store redux
    return(
	    <React.Fragment>

	       <ContentTop>
	           {this.showProducts(products)}
	       </ContentTop>

	    </React.Fragment>
      )
  }
  /*============lay product hien thi template=====================*/
  showProducts=(products)=>{
  	var {fill}=this.props;
  	var {serchON}=this.props;
    var resule=null;
      if(products.length >0){

      		if(serchON){
      			var resule2=products.filter((product)=>{
      				return product.tagserch.indexOf(serchON) !== -1;
      			})
      			resule=resule2.map((product,index)=>{
      				return <ProductItem key={index}
                          				index={index}
                          				product={product}
                       
             				/>
      			})
      			//console.log('serch ok',serchON);
          	}

      		else if(fill==='all'&serchON !=='' || fill===''&serchON ==='' || fill==='all'&serchON ===''){
      			resule=products.map((product,index)=>{
  					return <ProductItem key={index}
                          				index={index}
                          				product={product}
                       
             				/>
             			});

      		}

      		else if(fill){
      			var	resule1=products.filter((product)=>{
      				return product.tagname === fill;
      			})
      			//console.log(resule1);
      			resule=resule1.map((product,index)=>{
      				return <ProductItem key={index}
                          				index={index}
                          				product={product}
                       
             				/>
      			})
      		}
      		
      }
      return resule;
  }
  /*==============================================================*/

}

/*--------------------------------------------*/
var mapStateToProp=(state)=>{
    return{
        products:state.products,
    }
}
var mapDispathToProp=(dispath,props)=>{
    return{
        getProductsAPI:()=>{
            dispath(action.get_products_api());
        },
    }
}
export default connect(mapStateToProp,mapDispathToProp)(ContentTopContainer);