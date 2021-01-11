export const SET_TRANSACTION_LIST = 'transaction/SET_TRANSACTION_LIST';

export function setTransactionList(transactions) {
    console.log("트랜잭션 액션")
    return {
        type : SET_TRANSACTION_LIST,
        payload : transactions,
    }
}