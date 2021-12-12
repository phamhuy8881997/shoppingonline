import React, {Component} from 'react';
import './notify.css';
//import {Link} from 'react-router-dom';
import * as action from "./../../redux/action/index";
import {connect} from 'react-redux';

class Notify extends Component {
	constructor(props){
		super(props);
		this.state={
			id:'0',
			name:'',
			img:'',
			price:'',
			tolink:'',
			no1:'xxxxx',
			no2:'xxxxx',
			no3:'xxxxx',
			no4:'xxxxx',
			sale:'xxxxx',
			saleLink:'1',
			no5:'xxxxx',
			no6:'xxxxx',
			no7:'xxxxx',
			no8:'xxxxx',
		}
	}

	componentDidMount(){
  		this.props.getdatapage();
  		this.props.getdatanotify();
    }

    handleChange=(e)=>{
    	var target=e.target;
    	var name=target.name;
    	var value=target.value;
    	this.setState({
    		[name]:value
    	})
    }

    onClear=()=>{
    	this.setState({
    		id:'0',
    		name:'',
    		img:'',
    		price:'',
    		tolink:''
    	})
    }

    onUPdata=()=>{
    	var {id,name,img,price,tolink}=this.state;
    	let arTemp={name:name,img:img,price:price,tolink:tolink};
    	if(window.confirm('bạn muốn cập nhật ?')){
    		if(id==='0'){
    			window.alert('chua co id update');
    		}else{
    			this.props.putdatapage(id,arTemp);
    		}
    		//window.location.reload();
    		window.alert("Cập Nhật Thành Công !")
    		this.onClear();
    	}
    }

    ongetdata=(id,name,img,price,tolink)=>{
    	this.setState({
    		id:id,
    		name:name,
    		img:img,
    		price:price,
    		tolink:tolink
    	})
    }

    upNotify=(id)=>{
    	var {no1,no2,no3,no4,sale,saleLink,no5,no6,no7,no8}=this.state;
    	let arrtemp1={notify1:[no1,no2,no3,no4]};
    	let arrtemp2={notify2:[no5,no6,no7,no8]};
    	let arrtemp3={notify3:[sale,saleLink]};
    	if(window.confirm("bạn muốn cập nhật")){
    		if(id==='1'){
    		this.props.putdatanotify(arrtemp1);
	    	}else if(id==='2'){
	    		this.props.putdatanotify(arrtemp2);
	    	}else {
	    		this.props.putdatanotify(arrtemp3);
	    	}
	    	window.alert("vui lòng reload trang cập nhật")

    	}
    }

    onRE=()=>{
    	window.location.reload();
    }


	render(){
		var {id,name,img,price,tolink}=this.state;
		var {no1,no2,no3,no4,sale,saleLink,no5,no6,no7,no8}=this.state;
		//console.log('test',name,'-',img,'-',price,'-',tolink);
		//console.log('test',this.props.notifypage[0]);
		let {notifypage}=this.props;
		return(
			<div className="notify-1">
				<div className="row slide-1">
					<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
						<h1>Cập Nhật Quảng Cáo</h1>
						<table className="table table-bordered table-hover">
							<thead>
								<tr>
									<th>STT</th>
									<th>NAME</th>
									<th>IMAGE</th>
									<th>Image</th>
									<th>PRICE</th>
									<th>TOLINK</th>
									<th>UPDATE</th>
								</tr>
							</thead>
							<tbody>
								{this.showTB()}
							</tbody>
						</table>
					</div>
				</div>
				<div className="row notify-1-1">
					<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
						<span className="label label-danger">{id}</span>
						<p>
						name<input type="text" name="name" className="form-control" value={name} onChange={this.handleChange}/>
						</p>
						<p>
						image<input type="text" name="img" className="form-control" value={img} onChange={this.handleChange}/>	
						</p>
						<p>
						price<input type="text" name="price" className="form-control" value={price} onChange={this.handleChange}/>	
						</p>
						<p>
						tolink<input type="text" name="tolink" className="form-control" value={tolink} onChange={this.handleChange}/>	
						</p>
						
						<button type="button" className="btn btn-primary" onClick={()=>{this.onUPdata()}}>Cập Nhật</button>
						<button type="button" className="btn btn-warning" onClick={()=>{this.onClear()}}>Xóa Tạm</button>
					</div>
				</div>
				<hr/>
				<div class="row">
					<h1>Cap nhat bang tin</h1>
					{notifypage[0]===undefined?(<div></div>):(
					<div>
						<div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
						<table class="table table-bordered table-hover">
							<thead>
								<tr>
									<th style={{color:"aqua"}}>Bảng Tin 1</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>{notifypage[0].notify1[0]}</td>
								</tr>
								<tr>
									<td>{notifypage[0].notify1[1]}</td>
								</tr>
								<tr>
									<td>{notifypage[0].notify1[2]}</td>
								</tr>
								<tr>
									<td>{notifypage[0].notify1[3]}</td>
								</tr>
							</tbody>
						</table>
						</div>
						<div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
							<table class="table table-bordered table-hover">
								<thead>
									<tr>
										<th style={{color:"aqua"}}>khuyến mãi sale</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>{notifypage[0].notify3[0]}</td>
									</tr>
									<tr>
										<td>sale-link:{notifypage[0].notify3[1]}</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
							<table class="table table-bordered table-hover">
								<thead>
									<tr>
										<th style={{color:"aqua"}}>Bảng Tin 2</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>{notifypage[0].notify2[0]}</td>
									</tr>
									<tr>
										<td>{notifypage[0].notify2[1]}</td>
									</tr>
									<tr>
										<td>{notifypage[0].notify2[2]}</td>
									</tr>
									<tr>
										<td>{notifypage[0].notify2[3]}</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					)}
				</div>
				<div class="row notify-2">
					<div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
						<input type="text" name="no1" class="form-control" value={no1} onChange={this.handleChange} />
						<input type="text" name="no2" class="form-control" value={no2} onChange={this.handleChange} />
						<input type="text" name="no3" class="form-control" value={no3} onChange={this.handleChange} />
						<input type="text" name="no4" class="form-control" value={no4} onChange={this.handleChange} />
						<button type="button" class="btn btn-warning" onClick={()=>{this.upNotify('1')}}>Cập Nhật</button>
					</div>
					<div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
						<input type="text" name="sale" class="form-control" value={sale} onChange={this.handleChange}/>
						<input type="text" name="saleLink" class="form-control" value={saleLink} onChange={this.handleChange}/>
						<button type="button" class="btn btn-danger" onClick={()=>{this.upNotify(3)}}>Cập Nhật</button>
						
					</div>
					<div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
						<input type="text" name="no5" class="form-control" value={no5} onChange={this.handleChange} />
						<input type="text" name="no6" class="form-control" value={no6} onChange={this.handleChange} />
						<input type="text" name="no7" class="form-control" value={no7} onChange={this.handleChange} />
						<input type="text" name="no8" class="form-control" value={no8} onChange={this.handleChange} />
						<button type="button" class="btn btn-primary" onClick={()=>{this.upNotify('2')}}>Cập Nhật</button>
					</div>
					<button type="button" class="btn btn-success" onClick={()=>{this.onRE()}}>Reload</button>
				</div>
			</div>
		)
	}
	/*==========================================*/
	showTB=()=>{
		let rs='';
		let {datapage}=this.props;
		rs=datapage.map((data,i)=>{
			return <tr key={i}>
						<td>{i+1}</td>
						<td>{data.name}</td>
						<td>{data.img}</td>
						<td>
							<img src={data.img} alt="..."/>
						</td>
						<td>{data.price}</td>
						<td>{data.tolink}</td>
						<td>
							<button type="button" className="btn btn-danger" onClick={()=>{this.ongetdata(data.id,data.name,data.img,data.price,data.tolink)}}>Cập Nhật</button>
						</td>
					</tr>
		})
		return rs;
	}
	/*==========================================*/
	/*==========================================*/
	/*==========================================*/
	/*==========================================*/
	/*==========================================*/
	/*==========================================*/

}

var mapStateToProps=(state)=>{
	return{
		datapage:state.datapage,
		notifypage:state.notifypage,
	}
}

var mapDispathToProps=(dispath,props)=>{
	return{
		getdatapage:()=>{
			dispath(action.get_data_page_api());
		},
		putdatapage:(id,data)=>{
			dispath(action.put_data_page_api(id,data))
		},
		getdatanotify:()=>{
			dispath(action.get_data_notify_api());
		},
		putdatanotify:(data)=>{
			dispath(action.put_data_notify_api(data))
		},
	}
}

export default connect(mapStateToProps,mapDispathToProps)(Notify);	