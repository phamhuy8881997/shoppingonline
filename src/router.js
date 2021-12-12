import Content from './component/content/content';
import Notfound from './component/error404/notfound';
import ProductSelect from'./component/select/productselect';
import BuyProduct from './component/buyProduct/buyProduct';
import AdminAPI from './component/adminAPI/adminAPI';
import FireStore from './component/datafirebase/firestore';
import Notify from './component/header/notify';
import News from './component/News/news';


const route=[
	
	{
		path:'/',
		exact:true,
		main:()=><Content />
	},
	{
		path:'/product/:id/select',
		exact:false,
		main:({history,match})=><ProductSelect history={history} match={match} />
	},
	{
		path:'/shop/by/product',
		exact:false,
		main:({history})=><BuyProduct history={history} />
	},
	{
		path:'/admin/99/admin',
		exact:false,
		main:({history})=><AdminAPI history={history} />
	},
	{
		path:'/firestore',
		exact:false,
		main:({history})=><FireStore history={history} />
	},
	{
		path:'/notify',
		exact:false,
		main:({history})=><Notify history={history} />
	},
	{
		path:'/news/:id/news',
		exact:false,
		main:({history,match})=><News history={history} match={match} />
	},
	{
		path:'',
		exact:false,
		main:()=><Notfound/>
	}

]
export default route;