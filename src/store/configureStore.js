import {createStore, combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import reducers from '../reducers';
import thunk from 'redux-thunk';
import notificationEffects from '../middlewares/notificationEffects'
//import {SET_TRANSACTION_LIST} from '../actions/transactionActions';
import transactionEffects from '../middlewares/transactionEffects';
import searchFilterEffects from '../middlewares/searchFilterEffects';
import routerEffecs from '../middlewares/routerEffects'
//redux-pack
import {middleware as reduxPackMiddleware} from 'redux-pack';


// const customMiddleware = store =>nextRunner => action =>{
//     console.log('미들웨어1 액션객체',action); //nextRunner 이전 작업
//     console.log('미들웨어1 실행전',store.getState()); //nextRunner 이전 작업 2

//     const result = nextRunner(action);;

//     console.log('미들웨어1 실행 후',store.getState()); //nextRunner 이후
//     return result;
// }

// const customMiddleware1 = () => nextRunner => action =>{
//     if(action.type === SET_TRANSACTION_LIST){
//         return nextRunner({
//             ...action,
//             payload :[{
//                 id : 0,
//                 code : 'DOIT',
//                 name : '두잇코인',
//                 totalPrice : 100000,
//                 currentPrice : 1111,
//                 dateTime : '현재시간',
//             }]
//         })
//     }
//     return nextRunner(action);
// }

// const customMiddleware2 = store =>nextRunner => action =>{
//     console.log('미들웨어2 액션 전달됨',action); //nextRunner 이전 작업
//     console.log('미들웨어2 실행전',store.getState()); //nextRunner 이전 작업 2

//     const result = nextRunner(action);;

//     console.log('미들웨어 2 실행후',store.getState()); //nextRunner 이후
//     return result;
// }

// export default initStates =>createStore(
//     combineReducers(reducers),
//     initStates,
//     composeWithDevTools(),
// )

export default initStates =>createStore(
    combineReducers(reducers),
    initStates,
    composeWithDevTools(applyMiddleware(thunk,reduxPackMiddleware,notificationEffects,transactionEffects,searchFilterEffects,routerEffecs))
    ,
)