import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { withStyles, css, withStylesPropTypes } from "./withStyles";
import { unit } from "./Theme";

class InlineList extends PureComponent {
  render() {
    const {
      align,
      children,
      styles,
      spacingBetween,
      verticalAlign,
    } = this.props;
    return (
      <div
        {...css(
          styles.wrapper,
          align === "center" && styles.alignCenter,
          align === "right" && styles.alignRight,
          verticalAlign === "top" && styles.verticalAlignTop,
          verticalAlign === "bottom" && styles.verticalAlignBottom
        )}
      >
        {React.Children.map(children, (child) => (
          <div {...css({ marginRight: spacingBetween * unit })}>{child}</div>
        ))}
      </div>
    );
  }
}

InlineList.propTypes = {
  ...withStylesPropTypes,
  align: PropTypes.oneOf(["left", "center", "right"]),
  verticalAlign: PropTypes.oneOf(["top", "middle", "bottom"]),
  spacingBetween: PropTypes.number,
  children: PropTypes.node,
};

InlineList.defaultProps = {
  spacingBetween: 1,
};

export default withStyles(() => ({
  wrapper: {
    display: "flex", //가로배치 속성적용
    flexDirection: "row", //가로배치 속성적용
    flexWrap: "wrap", //화면 밖의 하위요소를 아래로 밀어 배치
    justifyContent: "flex-start", //하위요소를 왼쪽부터 배치
    alignItems: "center", //하위요소를 상하 가운데 정렬
  },
  alignCenter: {
    justifyContent: "center",
  },
  alignRight: {
    justifyContent: "flex-end", //하위요소 오른쪽 정렬
  },
  verticalAlignTop: {
    alignItems: "flex-start", //하위내용을 위로 정렬
  },
  verticalAlignBottom: {
    //하위 요소의 내용을 아래로 정렬
    alignItems: "flex-end",
  },
}))(InlineList);
