import {
    TRADE_COMPLETE,
    requestTransactionList,
} from '../actions/transactionActions';
import {showMessage} from '../actions/notificationActions';

export default store => nextRunner => action=> {
    const { type, payload } = action;
    const result = nextRunner(action);
    if(type === TRADE_COMPLETE){
        const message = "거래목록을 최선 정보로 업데이트 하였습니다. trnasactionEffects";
        store.dispatch(showMessage(message));
        store.dispatch(requestTransactionList());
    }
    return result;
}