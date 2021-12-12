import './notfound.css';
import React, {Component} from 'react';

class Notfound extends Component {
  render(){
    return(
      <React.Fragment>
        <div className="notfound1">
        	<h1>ERROR --- 404 --- !!!</h1>
        	<p>
	        	<i className='fas fa-skull-crossbones fa-spin' ></i>
	        	<i className='fas fa-user-secret' ></i>
	        	<i className='fas fa-skull-crossbones fa-spin' ></i>
        	</p>
        </div>
      </React.Fragment> 
      )
  }
}
export default Notfound;