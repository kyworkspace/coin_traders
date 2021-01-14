import {SET_TRANSACTION_LIST,LOADING_TRANSACTION_LIST,SET_ERROR} from '../actions/transactionActions';
const initState = {
    ids : [],
    entities :[],
    hasError : false,
};



export default (state=initState,action)=>{
    
    const {type , payload} = action;
    switch(type){
        case SET_TRANSACTION_LIST : {
            console.log("트랜잭션 리듀서 리스트 호출")
            const ids = payload.map(entity=>entity['id']);
            const entities = payload.reduce((finalEntities,entity)=>({
                ...finalEntities,
                [entity['id']]:entity,
            }),{});

            return {...state,ids,entities,loading : false,hasError:false};
        }
        case LOADING_TRANSACTION_LIST :{ //로딩을 확인
            console.log("트랜잭션 리듀서 로딩 호출")
            return{
                ...state,
                loading : true,
                hasError : false,
            }
        }
        case SET_ERROR:{
            console.log("트랜잭션 리듀서 에러 호출")
            const {errorMessage} = payload;
            return{
                ...state,
                loading : false,
                hasError : true,
                errorMessage,
            }
        }
        default : return state;
    }
}