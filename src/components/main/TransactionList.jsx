//검색 및 결과 목록 화면 구성
import React, { Component } from "react";

//import Api from "../../Api";
import Heading from "../../ui/Heading";
import Card from "../../ui/Card";

import TransactionSearchFilterContainer from "../../containers/main/TransactionSearchFilterContainer";
import TransactionTable from "./TransactionTable";
import TransactionPaginationContatiner from '../../containers/main/TransactionPaginationContainer';

class TransactionList extends Component {
  componentDidMount() {
    // Api.get("/transactions").then(({ data }) =>
    //   this.props.setTransactionList(data)
    // );
    this.props.requestTransactionList();
    //함수형태로 가져오는 것이기 때문에 여기서 콜백
  }

  render() {
    const { transactions,loading } = this.props;
    return (
      <div>
        {/* 검색부분 */}
        <Heading level={3}>거래현황</Heading>
        <Card vertical={4} horizontal={4}>
          <TransactionSearchFilterContainer />
        </Card>
        {/* 목록 부분 */}
        <Card>
          <TransactionTable transactions={transactions} isLoading={loading}/>
        </Card>
        <TransactionPaginationContatiner/>
      </div>
    );
  }
}

export default TransactionList;
