import * as typess from "./../constant/index";

var intinial=[];
var cartshop=(state=intinial,action)=>{
	switch(action.type) {
		case typess.ADDtoCART://truong hop them vao gio hang
			var {product,sll}=action;
			var arrTemp={product:product,sll:sll};
				var index=-1;
				index=findIndex(state,product);
				if(index !== -1){
					state[index].sll+=1;
				}else{
					state.push(arrTemp);
				}
				//console.log('state--:',state);
			localStorage.setItem('ITEM',JSON.stringify(state));
			return [...state];
		case typess.DELETEonCARTSHOP://truong hop xoa san pham khoi gio hang
			var {id}=action;
			id.toString();
			//console.log('id-can xoa:',id);
			var arrtem=[];
			for(let i=0;i<state.length;i++){
				if(state[i].product.id!==id){
					arrtem.push(state[i]);
				}
			}
			state=arrtem;
			localStorage.setItem('ITEM',JSON.stringify(state));
			return [...state];

		case typess.DELETEallSHOP:
			var deleteAll=[];
			state=deleteAll;
			localStorage.setItem('ITEM',JSON.stringify(state));
			return [...state];
		default://truong khong lam gi ca van co an
			return [...state];
	}
}

const findIndex=(state,product)=>{
	var index=-1;
	if(state.length > 0){
		for(var i=0;i<state.length;i++){
			if(state[i].product.id===product.id){
				index=i;
			}
		}
	}
	return index
}

export default cartshop;