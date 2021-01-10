// 검색 목록
//데이터 테이블 컴포넌트 사용, 프로퍼티에는 배열형 값이 들어있으므로 map() 함수를 이용해서 출력
import React, { Component } from "react";
import PropTypes from "prop-types";
import Table from "../../ui/Table";
import TableRow from "../../ui/TableRow";
import TableCell from "../../ui/TableCell";
import TableHead from "../../ui/TableHead";
import TableBody from "../../ui/TableBody";

class TransactionTable extends Component {
  render() {
    const { transactions } = this.props;
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="left">코인</TableCell>
            <TableCell align="center">시가총액</TableCell>
            <TableCell align="center">현재시세</TableCell>
            <TableCell align="right">거래 시간</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map(
            ({ id, name, totalPrice, currentPrice, dateTime }) => (
              <TableRow key={id}>
                <TableCell>{name}</TableCell>
                <TableCell align="center">{totalPrice}</TableCell>
                <TableCell align="center">{currentPrice}</TableCell>
                <TableCell align="right">{dateTime}</TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    );
  }
}

TransactionTable.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string,
      totalPrice: PropTypes.string,
      currentPrice: PropTypes.string,
      dateTime: PropTypes.string,
    })
  ),
};

export default TransactionTable;