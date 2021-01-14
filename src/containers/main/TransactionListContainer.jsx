import { connect } from "react-redux";
import TransactionList from "../../components/main/TransactionList";
//import { setTransactionList } from "../../actions/transactionActions";
import { requestTransactionList } from "../../actions/transactionActions";

const mapStateToProps = (state) => {
  console.log("트랜잭션 리스트 컨테이너");
  const { ids, entities,loading } = state.transactions;
  const transactions = ids.map((id) => entities[id]);

  return { transactions,loading };
};

const mapDisPatchToProps = {
  requestTransactionList,
};

export default connect(mapStateToProps, mapDisPatchToProps)(TransactionList);
