import React from "react";
import { storiesOf } from "@storybook/react";

import Table from "../ui/Table";
import TableHead from "../ui/TableHead";
import TableBody from "../ui/TableBody";
import TableRow from "../ui/TableRow";
import TableCell from "../ui/TableCell";

storiesOf("UI/TABLE", module).addWithJSX("Table 예제", () => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell align="left">코인</TableCell>
        <TableCell align="center">시가총액</TableCell>
        <TableCell align="center">현재 시세</TableCell>
        <TableCell align="rigth">거래시간</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableCell>비트코인(BTX)</TableCell>
        <TableCell align="center">123,123,000,000원</TableCell>
        <TableCell align="center">4,200,000원</TableCell>
        <TableCell align="right">2020/01/20 08:23:22</TableCell>
      </TableRow>
    </TableBody>
    <TableBody>
      <TableRow>
        <TableCell>이더리움(IDU)</TableCell>
        <TableCell align="center">3,123,000,000원</TableCell>
        <TableCell align="center">200,000원</TableCell>
        <TableCell align="right">2020/01/20 08:24:20</TableCell>
      </TableRow>
    </TableBody>
  </Table>
));
