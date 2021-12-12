//import * as typess from "./../constant/index";

var intinial=[];
var firestore=(state=intinial,action)=>{
	switch(action.type) {
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
export default firestore;