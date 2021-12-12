import * as typess from "./../constant/index";

var intinial=[];
var notifypage=(state=intinial,action)=>{
	switch(action.type) {
		case typess.DATAPAGE1:
			state=action.data;
			return [...state];
		default:
			return [...state];
	}
}

/*const findIndex=(state,id)=>{
	var index=-1;
	for(var i=0;i<state.length;i++){
		if(state[i].id===id){
			index=i;
		}
	}
	return index;
}*/
export default notifypage;