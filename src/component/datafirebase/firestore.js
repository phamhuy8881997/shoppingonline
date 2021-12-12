import './firestore.css';
import {Component} from 'react';
import * as action from "./../../redux/action/index";
import {connect} from 'react-redux';
//import firebase from './../../firebase';

class FireStore extends Component {
	constructor(props){
		super(props);
		this.state={
			name:'',
			price:0
		}
	}

	handlechange=(e)=>{
		var target=e.target;
		var name=target.name;
		var value=target.value;
		this.setState({
			[name]:value
		});
	}

	pushdata=()=>{
		var {name,price}=this.state;
		var dataTemp={name:name,price:price}
	}


  render(){
  	var {name,price}=this.state;
    return(
        <div>
        	<div className="container-fluid">
        		<div className="row">
        			<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        				<p>name</p>
        				<input type="text" name="name" className="form-control" value={name} onChange={this.handlechange}/>
        				<p>price</p>
        				<input type="text" name="price" className="form-control" value={price} onChange={this.handlechange}/>

        				<button type="button" className="btn btn-success" onClick={()=>this.pushdata()}>them</button>
        			</div>
        		</div>
        	</div>
        </div>
      )
  }
}
const mapStateToProp=(state)=>{
	return{

	}
}
const mapDispathToProp=(dispath,props)=>{
	return{
	
	}
}
export default connect(mapStateToProp,mapDispathToProp)(FireStore);