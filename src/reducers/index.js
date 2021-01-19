

//import transactions from './transactionReducer'; //api 호출 방식으로 변경함
import createReducers from '../api-redux-pack/createReducers';

import notification from './notificationReducer';
import searchFilter from './searchFilterReducer'

const apiReducers = createReducers('transactions','users');


export default {
    //transactions,
    ...apiReducers,
    notification,
    searchFilter
}