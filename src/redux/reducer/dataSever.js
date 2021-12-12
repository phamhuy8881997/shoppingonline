import * as typess from "./../constant/index";

var intinial=[];
var dataServer=(state=intinial,action)=>{
	switch(action.type) {
		case typess.UPDATASEVER:
			 var {data}=action;
			 console.log('test-data:',data);
			 state.push(data);
			 console.log('state',state);
			return [...state];
		default:
			return [...state];
	}
}
export default dataServer;