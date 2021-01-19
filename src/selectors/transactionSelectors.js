// import {
// FETCH_TRANSACTION_LIST,
// CREATE_TRANSACTION,
// } from '../actions/transactionPackActions';
// import {createSelector} from 'reselect'


// export const transactionsSelector = state => state.transactions; 
// //스토어데이터에서 거래 정보를 추출하는 셀렉터

// // export const transactionListSelector = (state) =>{
// //             //그래프 DB 구조의 거래목록자료를 원본배열로 변환하는 셀렉터.
// //             const {ids,entities} = transactionsSelector(state);
// //             return ids.map((id)=>entities[id]);
// //         }

// export const transactionListSelector = createSelector(
//     [transactionsSelector],transactions=>{
//         const {ids,entities} = transactions;
//         return ids.map(id=>entities[id]);
//     }
// )

// //반복된 구조를 반환하는 경우 reselector에 저장시켜둬서 언제든 빠르게 찾아낼수 있다.

// export const loadingStateSelector = state => transactionsSelector(state).loadingState;
// //거래 정보의 전체 로딩 정보 객체를 추출하는 셀렉터

// export const transactionListLoadingStateSelector = state => loadingStateSelector(state)[FETCH_TRANSACTION_LIST];
// //전체 거래 목록요청의 로딩상태만 추출하는 셀렉터

// export const transactionCreateLoadingStateSelector = state => loadingStateSelector(state)[CREATE_TRANSACTION];
// //거래 생성 요청의 로딩상태만을 추출하는 셀렉터

import createSelectors from '../api-redux-pack/createSelectors';

export const {
    resourceSelector : transactionsSelector,
    collectionSelector : transactionListSelector,
    collectionLoadingStateSelector : transactionListLoadingStateSelector,
    createLoadingStateSelector : transactionCreateLoadingStateSelector,
    paginationSelector,
} = createSelectors('transactions');