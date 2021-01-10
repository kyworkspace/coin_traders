//검색필터
//폼에서 제공받은 프로바이더 를 이용해서 onChange, value  콜백 받음

import React, { PureComponent } from "react";

import InlineList from "../../ui/InlineList";
import Button from "../../ui/Button";
import Text from "../../ui/Text";
import Input from "../../ui/Input";
import Form from "../../ui/Form";

import Select, { Option } from "../../ui/Select";

class TransactionSearchFilter extends PureComponent {
  render() {
    return (
      <Form onSubmit={(values) => console.log(value)}>
        <Form.Consumer>
          {({ onChange, values }) => (
            <InlineList spacingBetween={2} verticalAlign="bottom">
              <Text xlarge bold>
                검색
              </Text>
              <Select
                name="code"
                label="코인 코드"
                onChange={onChange}
                value={values["code"]}
              >
                <Option label="선택해주세요" />
                <Option label="비트코인(BTX)" value="BTX" />
                <Option label="이더리움(ETH)" value="ETH" />
                <Option label="삼성전자" value="samsung" />
                <Option label="삼성전자우" value="samsungWoo" />
              </Select>
              <Input
                name="minAmount"
                label="최소거래가"
                onChange={onChange}
                value={values["minAmount"]}
              />
              <Input
                name="maxAmount"
                label="최대거래가"
                onChange={onChange}
                value={values["maxAmount"]}
              />
              <Button type="submit" primary>
                검색
              </Button>
            </InlineList>
          )}
        </Form.Consumer>
      </Form>
    );
  }
}

TransactionSearchFilter.propTypes = {};

export default TransactionSearchFilter;
