//검색 및 결과 목록 화면 구성
import React, { Component } from "react";

import Api from "../../Api";
import Heading from "../../ui/Heading";
import Card from "../../ui/Card";

import TransactionSearchFilterContainer from "../../containers/main/TransactionSearchFilterContainer";
import TransactionTable from "./TransactionTable";

class TransactionList extends Component {
  componentDidMount() {
    console.log("트랜잭션 리스트");
    Api.get("/transactions").then(({ data }) =>
      this.props.setTransactionList(data)
    );
  }

  render() {
    const { transactions } = this.props;
    return (
      <div>
        {/* 검색부분 */}
        <Heading level={3}>거래현황</Heading>
        <Card vertical={4} horizontal={4}>
          <TransactionSearchFilterContainer />
        </Card>
        {/* 목록 부분 */}
        <Card>
          <TransactionTable transactions={transactions} />
        </Card>
      </div>
    );
  }
}

export default TransactionList;
