import Api from '../Api';
export const SET_TRANSACTION_LIST = 'transaction/SET_TRANSACTION_LIST';


export function setTransactionList(transactions) {
    console.log("트랜잭션 액션")
    return {
        type : SET_TRANSACTION_LIST,
        payload : transactions,
    }
}

export function requestTransactionList(params){
    return (dispatch)=> Api.get('/transactions',{params}).then(({data})=>dispatch(setTransactionList(data)))
    //함수를 반환함
}
