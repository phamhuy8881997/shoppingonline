import './adminAPI.css';
import React, {Component} from 'react';

import {connect} from 'react-redux';
import * as action from "./../../redux/action/index";

class AdminAPI extends Component {
  constructor(props){
    super(props);
    this.state={
      id:0,
      name:'',
      image:'',
      price:'',
      tagname:'',
      tagserch:'',
      descript:'',
      sale:'',
      video:'',
    }
  }

  componentDidMount(){
       this.props.getProductsAPI();
  }

  /*componentWillReceiveProps(nextprops){
       this.props.getProductsAPI();
  }*/

  onchange=(e)=>{
    var target=e.target;
    var name=target.name;
    var value=target.value;
    this.setState({
      [name]:value
    })
  }
  render(){
    var {id,name,image,price,tagname,tagserch,descript,sale,video}=this.state;
    return(
      <React.Fragment>
        <div className="admin-api text-center">
        	<h1>Trang Quản Lý Sản Phẩm</h1>
        	<div className="row admin-1" id="style-3">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <table className="table table-bordered table-hover text-center">
                <thead>
                  <tr>
                    <th>STT</th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Price</th>
                    <th>Sale OFF</th>
                    <th>Video</th>
                    <th>TagName</th>
                    <th>TagSerch</th>
                    <th>Descript</th>
                    <th>admin</th>
                  </tr>
                </thead>
                  {this.showTbodyTable()}
              </table>
            </div>
          </div>
          <div className="row admin-1 text-center">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                 <h3>{id===0?'Thêm Sản Phẩm Mới':'Cập Nhật Sản Phẩm'}</h3>
                 <span className="label label-danger" style={{fontSize:'18px'}}>ID: {id}</span>
              <div className="row">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                  <p>Name:</p><input type="text" className="form-control" name='name' value={name} onChange={this.onchange}/>
                  <p>Image:</p><input type="text" className="form-control" name='image' value={image} onChange={this.onchange}/>
                  <p>Price:</p><input type="text" className="form-control" name='price' value={price} onChange={this.onchange}/>
                  <p>Sale:</p><input type="text" className="form-control" name='sale' value={sale} onChange={this.onchange}/>
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                  <p>Video:</p><input type="text" className="form-control" name='video' value={video} onChange={this.onchange}/>
                  <p>Tagname:</p><input type="text" className="form-control" name='tagname' value={tagname} onChange={this.onchange}/>
                  <p>Tagserch:</p><input type="text" className="form-control" name='tagserch' value={tagserch} onChange={this.onchange}/>
                  <p>Descript:</p><input type="text" className="form-control" name='descript' value={descript} onChange={this.onchange}/>
                </div>
                <div className="btn-add-replace-delete">
                  <button type="button" className="btn btn-primary" onClick={()=>this.postProductAPI()}>Thêm Mới</button>
                  <button type="button" className="btn btn-danger" onClick={()=>this.onclear()}>Clear</button>
                  <button type="button" className="btn btn-warning" onClick={()=>this.updateProduct()}>Cập Nhật</button>
                </div>
              
              </div>
            </div>
          </div>
          <button type="button" className="btn btn-primary go-back" onClick={()=>this.goBack()}>Quay Lại</button>
        </div>
      </React.Fragment> 
      )
  }
  /*===================================*/
  showTbodyTable=()=>{
    return <tbody>
             {this.showTable()} 
           </tbody>
  }
  /*===================================*/
  showTable=()=>{
    var {products}=this.props;
    var resule='';
    resule=products.map((product,index)=>{
      return <tr key={index}>
                  <td>{index+1}</td>
                  <td>{product.name}</td>
                  <td>{product.image}</td>
                  <td>{product.price}</td>
                  <td>{product.sale}</td>
                  <td>{product.video}</td>
                  <td>{product.tagname}</td>
                  <td style={{width:'200px'}}>{product.tagserch}</td>
                  <td style={{width:'350px'}}>{product.descript}</td>
                  <td>
                    <button type="button" className="btn btn-primary" 
                            onClick={()=>this.getproduct(product.id,
                                                        product.name,
                                                        product.image,
                                                        product.price,
                                                        product.sale,
                                                        product.video,
                                                        product.tagname,
                                                        product.tagserch,
                                                        product.descript
                                                        )}>Sửa</button>
                    <button type="button" className="btn btn-danger" onClick={()=>this.deleteProAPI(product.id)} >Xóa</button>
                  </td>
              </tr>
    })
    return resule;
  }
  /*===================================*/
  getproduct=(id,name,image,price,sale,video,tagname,tagserch,descript)=>{
    //console.log(id,name,image,price,tagname,tagserch,descript,sale,video);
    this.setState({
      id:id,
      name:name,
      image:image,
      price:price,
      sale:sale,
      video:video,
      tagname:tagname,
      tagserch:tagserch,
      descript:descript,
    })
  }
  /*===================================*/
  updateProduct=()=>{
    var {id,name,image,price,sale,video,tagname,tagserch,descript}=this.state;
    var data1={
           name:name,
           image:image,
           price:price,
           sale:sale,
           video:video,
           tagname:tagname,
           tagserch:tagserch,
           descript:descript,
        }
    if(window.confirm('bạn muốn cập nhật ??')){
      this.props.updateProduct(id,data1);
      window.alert('bạn vừa cập nhật 1 sản phẩm')
      //window.location.reload();
      this.onclear();
    }  
  }
  /*===================================*/
  onclear=()=>{
    this.setState({
        id:0,
        name:'',
        image:'',
        price:'',
        sale:'',
        video:'',
        tagname:'',
        tagserch:'',
        descript:'',
    })
  }
  /*===================================*/
  deleteProAPI=(id)=>{
    if(window.confirm('bạn có chắc muốn xóa không??')){
      this.props.deleteProductAPI(id);
      window.alert('ban vua xoa 1 san pham');
    }
  }
  /*===================================*/
  postProductAPI=()=>{
    var {name,image,price,sale,video,tagname,tagserch,descript}=this.state;
    var data2={
           name:name,
           image:image,
           price:price,
           sale:sale,
           video:video,
           tagname:tagname,
           tagserch:tagserch,
           descript:descript,
        }
    if(window.confirm('ban muon them moi san pham')){
      this.props.postProductAPI(data2);
      window.alert('ban vua them 1 san pham len sever')
      this.onclear();
    }
  }
  /*===================================*/
  goBack=()=>{
  	var {history}=this.props;
  	history.goBack();
  }
  /*===================================*/
  /*===================================*/
  /*===================================*/
}


/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
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
        updateProduct:(id,data)=>{
          dispath(action.put_products_api(id,data))
        },
        deleteProductAPI:(id)=>{
          dispath(action.delete_products_api(id))
        },
        postProductAPI:(data)=>{
          dispath(action.post_products_api(data))
        },
    }
}
export default connect(mapStateToProp,mapDispathToProp)(AdminAPI);