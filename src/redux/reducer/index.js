import {combineReducers} from 'redux';

import products from './products';
import cartshop from'./cartshop';
import dataServer from './dataSever';
import firestore from './firestore';
import datapage from './datapage';
import notifypage from './notifypage';

var myReducer=combineReducers({
	products:products,
	cartshop:cartshop,
	dataServer:dataServer,
	datapage:datapage,
	notifypage:notifypage,
	firestore:firestore,
});

export default myReducer;