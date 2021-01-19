import { connect } from "react-redux";
import TransactionList from "../../components/main/TransactionList";
//import { setTransactionList } from "../../actions/transactionActions";
//import { requestTransactionList } from "../../actions/transactionActions";
import { FETCH_TRANSACTION_LIST, requestTransactionList } from "../../actions/transactionPackActions";
import {transactionListSelector,loadingStateSelector,transactionListLoadingStateSelector} from '../../selectors/transactionSelectors.js'

const mapStateToProps = (state) => {
  // const { ids, entities,loadingState } = state.transactions;
  // const loading = loadingState[FETCH_TRANSACTION_LIST];
  // const transactions = ids.map((id) => entities[id]);
  // return {transactions,loading}
  // 셀렉터에 모든 내부 기능을 넘김
  
  return { transactions : transactionListSelector(state), loading : transactionListLoadingStateSelector(state)};
};

const mapDisPatchToProps = {
  requestTransactionList,
};

export default connect(mapStateToProps, mapDisPatchToProps)(TransactionList);
