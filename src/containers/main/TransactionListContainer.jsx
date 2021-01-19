import { connect } from "react-redux";
import TransactionList from "../../components/main/TransactionList";
//import { setTransactionList } from "../../actions/transactionActions";
//import { requestTransactionList } from "../../actions/transactionActions";
import { FETCH_TRANSACTION_LIST, requestTransactionList } from "../../actions/transactionPackActions";

const mapStateToProps = (state) => {
  const { ids, entities,loadingState } = state.transactions;
  const loading = loadingState[FETCH_TRANSACTION_LIST];
  const transactions = ids.map((id) => entities[id]);

  return { transactions,loading };
};

const mapDisPatchToProps = {
  requestTransactionList,
};

export default connect(mapStateToProps, mapDisPatchToProps)(TransactionList);
