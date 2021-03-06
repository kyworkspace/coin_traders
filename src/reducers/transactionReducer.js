import {SET_TRANSACTION_LIST,LOADING_TRANSACTION_LIST,SET_ERROR} from '../actions/transactionActions';
//redux-pack
import {handle} from 'redux-pack';
import {FETCH_TRANSACTION_LIST,CREATE_TRANSACTION} from '../actions/transactionPackActions';

const initState = {
    ids : [],
    entities :{},
    loadingState : {
        [CREATE_TRANSACTION] : false,
        [FETCH_TRANSACTION_LIST] : false,
    },
    errorState : {
        [CREATE_TRANSACTION] : false,
        [FETCH_TRANSACTION_LIST] : false,
    },
    pagination : {},
    pages : {}
};



export default (state=initState,action)=>{
    
    const {type , payload,meta} = action;
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
        case CREATE_TRANSACTION:
        case FETCH_TRANSACTION_LIST : {
            return handle(state,action,{
                //case LOADING_TRANSACTION_LIST와 동일
                start : prevState =>({
                    ...prevState,
                    loadingState : {
                        ...prevState.loadingState,
                        [type] : true
                    },
                    errorState : {
                        ...prevState.errorState,
                        [type] : false,
                    }
                }),
                //case SET_TRANSACTION_LIST와 동일
                success : prevState =>{
                    const { data } = payload;
                    //로딩 별개로 관리
                    const loadingAndErrorState = {
                        loadingState : {
                            ...prevState.loadingState,
                            [type] : false,
                        },
                        errorState : {
                            ...prevState.errorState,
                            [type] : false,
                        },
                    };

                    if(type === FETCH_TRANSACTION_LIST){
                        const {pageNumber,pageSize} = meta || {};
                        const ids = data.map(entity=> entity['id']);
                        const entities = data.reduce(
                            (finalEntities,entity)=>({
                                ...finalEntities,
                                [entity['id']] : entity,
                            }),
                            {}
                        );
    
                        return {
                            ...prevState,
                            ...loadingAndErrorState,
                            ids,
                            entities : {...prevState.entities, ...entities},
                            pagination :{
                                number : pageNumber,
                                size : pageSize
                            }
                        }
                    }else{
                        const id = data['id'];
                        return {
                            ...prevState,
                            ...loadingAndErrorState,
                            id,
                            entities:{...prevState.entities,[id] : data}
                            //그래프DB의 entities 객체에 추가된 자료 id 키값에 할당
                        }
                    }
                    
                },
                failure : prevState =>{
                    const { errorMessage } = payload.response.data;
                    return {
                        ...prevState,
                        loadingState : {
                            ...prevState.loadingState,
                            [type] : true
                        },
                        errorState : {
                            ...prevState.errorState,
                            [type] : false,
                        },
                        errorMessage,
                    }
                }
            })
        }
        default : return state;
    }
}