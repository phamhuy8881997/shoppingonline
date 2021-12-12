import './content.css';
import React, {Component} from 'react';

import ContentTopContainer from './../../redux/container/contentTopContainer';

import ContentHeader from './../contentHeader/contentHeader';

import Header from './../header/header';
import Foodter from './../foodter/foodter';

class Content1 extends Component {
	constructor(props){
		super(props);
		this.state={
			fill:'',
			keyword:''
		}
	}

	onfilter=(value)=>{
		this.setState({
			fill:value
		})
	}

	onserch=(keyword)=>{
		this.setState({
			keyword:keyword
		})
	}

  render(){
    return(
      <React.Fragment>
      <Header />
      <ContentHeader filter={this.onfilter} onserch={this.onserch}></ContentHeader>
        <div className="Content1" id='style-1'>
        	<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        		<ContentTopContainer fill={this.state.fill} serchON={this.state.keyword} />
        	</div>
        </div>
      <Foodter />
      </React.Fragment> 
      )
  }
}
export default Content1;