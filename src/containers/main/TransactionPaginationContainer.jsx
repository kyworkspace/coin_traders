import {connect} from 'react-redux';
import TransactionPagination from '../../components/main/TransactionPagination';
import {requestTransactionList} from '../../actions/transactionPackActions';


const mapStateToProps = (state) =>{
    const {pagination,loading,ids} = state.transactions;
    const { number , size } = pagination;

    return {
        searchParams : state.searchFilter.params,
        pageNumber : number || 1,
        hasNext : ids.length === size,
        //결과 목록의 개수가 페이지 크기가 같을 경우 다음페이지 존재한다고 가정,
        loading,
    }
}

const mapDispatchToProps = {
    requestTransactionList
}

export default connect(mapStateToProps,mapDispatchToProps)(TransactionPagination);