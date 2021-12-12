import React, {Component} from 'react';
import './headertop.css';
import { signInWithGoogle }  from './firebase';
import { auth } from './firebase';
import { toast } from 'react-toastify';

import LogoCall from './logoCall';

class HeaderTop extends Component {

	constructor() {
	    super();

	    this.state = {
	      currentUser: null
	    };
	  }

  	 unsubscribeFromAuth =()=> null;

  	componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
        this.setState({ currentUser: user });
	    });

	  }

	  componentWillUnmount() {
	    this.unsubscribeFromAuth();
	  }

	  onlogin=()=>{
	    signInWithGoogle();
	    auth.onAuthStateChanged(user => {
	      this.setState({ currentUser: user });
	      localStorage.setItem('loginF',JSON.stringify(this.state.currentUser));
	      //console.log('test',user);
	      if(user){
	        toast.dark(`🐙 xin chao ${user.displayName} `);
	        //let datapush={ user_N:user.email,timer: new Date() }
	        //firebase.firestore().collection('/userLogin').add(datapush);
	        window.location.reload();
	      }
	    });
	    
	  }

	  onlogOut=()=>{
	    auth.signOut();
	    this.setState({ currentUser: null });
	    localStorage.setItem('loginF',JSON.stringify(null));
	    window.location.reload();
	  }

	  showUser=()=>{
	  	let resule='';
	  	let {currentUser}=this.state;
	  	if(currentUser !== null){
	  		resule=<div className='show-user'>
		              <div>
		                <img src={currentUser.photoURL} alt="..."/>
		              </div>
		              <div>Name: {currentUser.displayName}</div>
		              {/*<div>Email: {currentUser.email}</div>*/}

		              <button onClick={() => this.onlogOut()}>LOG OUT</button>
		            </div>
	  	}else{
	  		resule=<div className='show-user1'>
	  				 <h2><i className='fa fa-user-circle-o'></i></h2>
	  				 <button onClick={()=>this.onlogin()}>SIGN IN WITH GOOGLE</button>
	  			   </div>	
	  		
	  	}
	  	return resule;
	  }

	render(){
		return(
			<React.Fragment>
			<LogoCall/>
			<div className="header-top">
				<div className="container-fluid">
		
					<div className="header-top-name"><i className='fa fa-rebel'></i>Store Mobile</div>
				
					<div className="dropdown">
						<a href="# " className="dropdown-toggle" data-toggle="dropdown">Login</a>
						<ul className="dropdown-menu">
							<li className="text-center">
								{this.showUser()}
							</li>
							<li>
								<a href="https://web-0977-data-9293-user.web.app/" id='tra-cuu'>tra cứu đơn hàng</a>
							</li>
							<li></li>
							<li></li>
							
						</ul>
					</div>
				</div>
			</div>
		</React.Fragment>
		)
	}
}
export default HeaderTop;