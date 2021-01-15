import Api from '../Api';
import {showMessage} from "./notificationActions";

export const LOADING_TRANSACTION_LIST = 'transaction/LOADING_TRANSACTION_LIST';
export const SET_TRANSACTION_LIST = 'transaction/SET_TRANSACTION_LIST';
export const SET_ERROR = 'transaction/SET_ERROR';


export function setError(errorMessage){
    return {
        type : SET_ERROR,
        payload : {errorMessage},
    }
}

export function setTransactionList(transactions) {
    console.log("트랜잭션 액션")
    return {
        type : SET_TRANSACTION_LIST,
        payload : transactions,
    }
}

export function requestTransactionList(params){
    return (dispatch)=> {
        dispatch(loading());
        Api.get('/transactions',{params})
        .then(
            ({data})=>dispatch(setTransactionList(data))
            ,error =>{
                 //dispatch(setError(error.response.data.errorMessage));
                 dispatch(showMessage(error.response.data.errorMessage,true))
                },
            );
        //axios는 에러가 발생할때 then의 두번째 인자에 해당하는 함수를 호출함
    }
    
    //함수를 반환함
}

export function loading(){
    return {
        type : LOADING_TRANSACTION_LIST,
    }
}