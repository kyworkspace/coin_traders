//검색 및 결과 목록 화면 구성
import React, { Component } from "react";
import axios from "axios";

import Heading from "../../ui/Heading";
import Card from "../../ui/Card";

import TransactionSearchFilter from "./TransactionSearchFilter";
import TransactionTable from "./TransactionTable";

class TransactionList extends Component {
  state = {
    transactions: [],
  };
  componentDidMount() {
    axios
      .get("/transactions")
      .then((response) => this.setState({ transactions: response.data }));
  }

  render() {
    const { transactions } = this.state;
    return (
      <div>
        {/* 검색부분 */}
        <Heading level={3}>거래현황</Heading>
        <Card vertical={4} horizontal={4}>
          <TransactionSearchFilter />
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
