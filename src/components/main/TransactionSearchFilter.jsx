//검색필터
//폼에서 제공받은 프로바이더 를 이용해서 onChange, value  콜백 받음

import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import InlineList from "../../ui/InlineList";
import Button from "../../ui/Button";
import Text from "../../ui/Text";
import Input from "../../ui/Input";
import Form from "../../ui/Form";

import Select, { Option } from "../../ui/Select";
import {withRouter} from 'react-router-dom';

//import Api from "../../Api";

class TransactionSearchFilter extends PureComponent {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(params) {
    //const { requestTransactionList,setFilter } = this.props; //검색 주소값을 넘겨주기 위해 변경
    const{setFilter,history} = this.props
    // Api.get("/transactions", { params }).then(({ data }) =>
    //   setTransactionList(data)
    // );
    const cleanedParams = Object.entries(params)
      .filter(([key, value]) => value !== "")
      .reduce((obj, [key, value]) => ({ ...obj, [key]: value }), {});
    // requestTransactionList(cleanedParams);
    // setFilter(cleanedParams);
    const queryString = Object.entries(cleanedParams)
    .map(([key,value])=>`${key}=${value}`) //['code=BTX', 'price=100']
    .join('&'); //'code=BTX&price=100'
    history.push(`/?${queryString}`);
  }

  render() {
    const {initValues} = this.props;
    return (
      <Form onSubmit={this.handleSubmit} initValues={initValues}>
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
                <Option label="선택해주세요" value="" />
                <Option label="비트코인(BTX)" value="BTX" />
                <Option label="이더리움(ETH)" value="ETH" />
                <Option label="삼성전자" value="samsung" />
                <Option label="삼성전자우" value="samsungWoo" />
              </Select>
              <Input
                name="currentPrice_gte"
                label="최소거래가"
                onChange={onChange}
                value={values["currentPrice_gte"]}
              />
              <Input
                name="currentPrice_lte"
                label="최대거래가"
                onChange={onChange}
                value={values["currentPrice_lte"]}
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

TransactionSearchFilter.defaultProps = {
  onChange: () => ({}),
};

TransactionSearchFilter.propTypes = { requestTransactionList: PropTypes.func,
setFilter : PropTypes.func };

export default withRouter(TransactionSearchFilter) ;
