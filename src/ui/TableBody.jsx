import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class TableBody extends PureComponent {
  //Head와 유사한 방식으로 자식프로퍼티를 사용함
  render() {
    const { children } = this.props;
    const { length } = React.Children.toArray(children);

    return (
      <tbody>
        {React.Children.map(children, (child, index) => {
          const baseline = index < length - 1 ? true : false;
          return React.cloneElement(child, { baseline });
        })}
      </tbody>
      //마지막을 제외한 행은 밑줄을 표시하도록
    );
  }
}

TableBody.propTypes = {
  children: PropTypes.node,
};

export default TableBody;
