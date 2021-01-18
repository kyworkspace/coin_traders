import {SET_ERROR} from '../actions/transactionActions';
import {showMessage,SHOW_NOTIFICATION,hideMessage} from '../actions/notificationActions';
import {debounce} from '../debounce';
//redux-pack
import {KEY,LIFECYCLE} from 'redux-pack'
//import {FETCH_TRANSACTION_LIST,createTransaction} from '../actions/transactionPackActions'

const debouceRunner = debounce(action=> action(),4000);

export default store => nextRunner=> action=>{
    const {type,meta} = action;
    if(meta && meta.notification){
        const {success , error} = meta.notification;

        if(success&&meta[KEY.LIFECYCLE]===LIFECYCLE.SUCCESS){//성공
            store.dispatch(showMessage(success))
        }
        else if(error && meta[KEY.LIFECYCLE] === LIFECYCLE.FAILURE){ //실패
            store.dispatch(showMessage(error,true));
        }
    }

    

    return nextRunner(action);

}