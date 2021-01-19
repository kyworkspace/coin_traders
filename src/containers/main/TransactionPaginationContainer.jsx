import {connect} from 'react-redux';
import TransactionPagination from '../../components/main/TransactionPagination';
import {FETCH_TRANSACTION_LIST, requestTransactionList} from '../../actions/transactionPackActions';
import {loadingStateSelector,transactionListLoadingStateSelector} from '../../selectors/transactionSelectors.js'
import { isDuration } from 'moment';


const mapStateToProps = (state) =>{
    // const {pagination,loadingState,ids} = state.transactions;
    // const { number , size } = pagination;
    // const loading = loadingState[FETCH_TRANSACTION_LIST]; //로딩 구분 & 분리
    // return {
    //     searchParams : state.searchFilter.params,
    //     pageNumber : number || 1,
    //     hasNext : ids.length === size,
    //     //결과 목록의 개수가 페이지 크기가 같을 경우 다음페이지 존재한다고 가정,
    //     loading,
    // }
    const {pagination,ids} = state.transactions;
    const {number,size} = pagination;
    return {
        searchParams : state.searchFilter.params,
        pageNumber : number || 1 ,
        hasNext : ids.length === size,
        loading : transactionListLoadingStateSelector(state),
    }
}

const mapDispatchToProps = {
    requestTransactionList
}

export default connect(mapStateToProps,mapDispatchToProps)(TransactionPagination);