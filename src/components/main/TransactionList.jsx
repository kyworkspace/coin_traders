//검색 및 결과 목록 화면 구성
import React, { Component } from "react";
import Heading from "../../ui/Heading";
import Card from "../../ui/Card";

import TransactionSearchFilter from "./TransactionSearchFilter";
import TransactionTable from "./TransactionTable";

class TransactionList extends Component {
  state = {
    transactions: [
      {
        id: "btx_01",
        name: "비트코인(BTX)",
        totalPrice: "123,000,000원",
        currentPrice: "4,200,000원",
        dateTime: "2020/01/20 08:23:22",
      },
    ],
  };
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
