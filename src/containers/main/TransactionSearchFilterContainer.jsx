import { connect } from "react-redux";
import TransactionSearchFilter from "../../components/main/TransactionSearchFilter";
// import { setTransactionList } from "../../actions/transactionActions";
//import { requestTransactionList } from "../../actions/transactionActions";
import { requestTransactionList } from "../../actions/transactionPackActions";
import {setFilter} from '../../actions/searchFilterActions'

export default connect(null, { requestTransactionList,setFilter })(
  TransactionSearchFilter
);
