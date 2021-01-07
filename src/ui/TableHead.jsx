import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class TableHead extends PureComponent {
  // 자식 프로퍼티의 값은 JSX 노트 형태 이므로 자바스크립트의 map() 함수가 아니라 리액트에서 제공하는
  // React.Children.map() 함수를 사용해야함. 해당 함수는 자식 프로퍼티에 포함된 JSX의 컴포넌트 엘리먼트를
  // 배열 처럼 취급함. 또한 React.cloneElement() 함수를 사용하여 각각의 자식 컴포넌트에 추가 프로퍼티를 전달함
  // 해당 함수는 JSX 노드를 복사함 다음 특정 프로퍼티를 추가함
  render() {
    const { children } = this.props;
    return (
      <thead>
        {React.Children.map(children, (child) =>
          React.cloneElement(child, { isHeader: true })
        )}
      </thead>
    );
  }
}
//TableHeader 컴포넌트이기 때문에 각 노드에 isHeader 프로퍼티를 추가해줌

TableHead.propTypes = {
  children: PropTypes.node,
};
export default TableHead;
