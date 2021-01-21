import {SET_FILTER} from '../actions/searchFilterActions';
import {requestTransactionList,resetTransactionList} from '../actions/transactionPackActions';

export default store => nextRunner => action=>{
    //검색 필터 변경이 생길때 자동으로 검색결과 요청을 구현
    const { type, payload } = action;
    const result = nextRunner(action);
    if(type === SET_FILTER){
        const {params} = payload || {};
        store.dispatch(resetTransactionList());
        //검색결과를 요청하기 전에 현재 검색 목록 초기화
        store.dispatch(requestTransactionList(params));
    }
    return result;
}