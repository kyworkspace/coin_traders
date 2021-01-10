//각 코인을 나타내는 메뉴, 상단 메뉴
import React, { PureComponent } from "react";
import Heading from "../../ui/Heading";
import InlineList from "../../ui/InlineList";

import CoinDashlet from "./CoinDashlet";

class CoinOverview extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <Heading level={3}>코인 동향</Heading>
        <InlineList>
          <CoinDashlet name="비트코인" priceLabel="4,216,000" />
          <CoinDashlet name="이더리움" priceLabel="216,000" />
          <CoinDashlet name="삼성전자" priceLabel="88,000" />
          <CoinDashlet name="삼성전자우" priceLabel="75,000" />
        </InlineList>
      </React.Fragment>
    );
  }
}

export default CoinOverview;
