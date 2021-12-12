import * as typess from "./../constant/index";
import callapi from "./../../API/callapi";
/*=========================getproduct==========================*/
export const get_products_api=()=>{
	return(dispath,props)=>{
		callapi('Store','GET',null).then(res=>{
			dispath(get_products(res.data))
		});
	}
}

export const get_products=(products)=>{
	return{
		type:typess.GETPRODUCTS,
		products:products
	}
}
/*=========================getproduct==============================*/
/*=========================cap nhat product========================*/
export const put_products_api=(id,data)=>{
	return(dispath,props)=>{
		callapi(`Store/${id}`,'PUT',data).then(res=>{
			dispath(put_products(res.data))
		});
	}
}

export const put_products=(products)=>{
	return{
		type:typess.PUTPRODUCT,
		products:products
	}
}
/*=========================cap nhat product========================*/
/*=======================xoa product tren server===================*/
export const delete_products_api=(id)=>{
	return(dispath,props)=>{
		callapi(`Store/${id}`,'DELETE',null).then(res=>{
			dispath(delete_product(res.data))
		});
	}
}

export const delete_product=(product)=>{
	return{
		type:typess.DELETEPRODUCT,
		product:product
	}
}
/*=======================xoa product tren server===================*/
/*====================them sản phẩm lên api========================*/
export const post_products_api=(data)=>{
	return(dispath,props)=>{
		callapi(`Store`,'POST',data).then(res=>{
			dispath(post_product(res.data))
		});
	}
}

export const post_product=(product)=>{
	return{
		type:typess.POSTPRODUCT,
		product:product
	}
}
/*====================them sản phẩm lên api========================*/
/*=========================get/product/id==========================*/
/*them vao gio hang tam thoi*/
export const get_product_id=(id)=>{
	return(dispath,props)=>{
		callapi(`Store/${id}`,'GET',null).then(res=>{
			dispath(product_on_cart(res.data,1))
		});
	}
}

export const product_on_cart=(product,sll)=>{
	return{
		type:typess.ADDtoCART,
		product:product,
		sll:sll
	}
}
/*=========================get/product/id==============================*/
/*=========================delete product on cartshop==================*/
export const delete_oncartshop=(id)=>{
	return{
		type:typess.DELETEonCARTSHOP,
		id:id
	}
}
/*=======================export==delete product on cartshop==============*/
/*=========================delet all product shop========================*/
export const delete_all_shop=()=>{
	return{
		type:typess.DELETEallSHOP
	}
}
/*=========================delet all product shop========================*/
/*=========================up data sever=================================*/
export const up_data_sever_api=(data)=>{
	return(dispath,props)=>{
		callapi('dataUser','POST',data).then(res=>{
			dispath(up_data_sever(res.data))
		})
	}
}

export const up_data_sever=(data)=>{
	return{
		type:typess.UPDATASEVER,
		data:data
	}
}
/*=========================up data sever=================================*/
/*XXXXXXXXXXXXXXXXXXXXXXXXXxxxx firebase      XXXXXXXXXXXXXXXXXXXXXXXXXXX*/
/*========================get firestore==================================*/
/*================cap nhat thong tin thong bao khuyen mai========-=======*/
export const get_data_page_api=()=>{
	return(dispath,props)=>{
		callapi('datapage','GET',null).then(res=>{
			dispath(get_data_page(res.data))
		})
	}
}
export const get_data_page=(data)=>{
	return{
		type:typess.DATAPAGE,
		data:data
	}
}
/*================cap nhat thong tin thong bao khuyen mai========-=======*/
/*================cap nhat thong tin thong bao khuyen mai========-=======*/
export const put_data_page_api=(id,data)=>{
	return(dispath,props)=>{
		callapi(`datapage/${id}`,'PUT',data).then(res=>{
			dispath(put_data_page(res.data))
		})
	}
}
export const put_data_page=(data)=>{
	return{
		type:typess.PUTDATAPAGE,
		data:data
	}
}
/*================cap nhat thong tin thong bao khuyen mai========-=======*/
/*================cap nhat bang tin thong bao ===================-=======*/
export const get_data_notify_api=()=>{
	return(dispath,props)=>{
		callapi('datanotify','GET',null).then(res=>{
			dispath(get_data_notify(res.data))
		})
	}
}
export const get_data_notify=(data)=>{
	return{
		type:typess.DATAPAGE1,
		data:data
	}
}
/*================cap nhat bang tin thong bao ===================-=======*/
/*================cap nhat bang tin thong bao ===================-=======*/
export const put_data_notify_api=(data)=>{
	return(dispath,props)=>{
		callapi('datanotify/1','PUT',data).then(res=>{
			//dispath(put_data_notify(res.data))
		})
	}
}
/*export const put_data_notify=(data)=>{
	return{
		type:typess.DATAPAGE2,
		data:data
	}
}*/
/*================cap nhat bang tin thong bao ===================-=======*/