import './content.css';
import React, {Component} from 'react';

class ContentTop extends Component {
  render(){
    return(
      	<div className="container-fluid contentTop">
      	 	<div className="row">
      	 		{this.props.children}
      	 	</div>
      	 </div> 
      )
  }
}
export default ContentTop;