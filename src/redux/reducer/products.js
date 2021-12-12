import * as typess from "./../constant/index";

var intinial=[];
var products=(state=intinial,action)=>{
	switch(action.type) {
		case typess.GETPRODUCTS:
			state=action.products
			return [...state];
		case typess.PUTPRODUCT:
			var{products}=action;
			var index=-1;
			index=findIndex(state,products.id)
			if(index !== -1){
				state.splice(index,1,products)
			}
			return [...state];
		case typess.DELETEPRODUCT:
			var{product}=action;
			state=state.filter((item)=>{
				return item.id !== product.id;
			})
			return [...state];
		case typess.POSTPRODUCT:
			var item=action.product;
			state.push(item);
			return [...state];
		default:
			return [...state];
	}
}

const findIndex=(state,id)=>{
	var index=-1;
	for(var i=0;i<state.length;i++){
		if(state[i].id===id){
			index=i;
		}
	}
	return index;
}
export default products;