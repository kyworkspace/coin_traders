import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Card from "../Card";
import { css, withStyles } from "../withStyles";

//Casd 컴포넌트를 사용하여 둥근 모서리로 만든 Modal 컴포넌트

class Modal extends PureComponent {
  render() {
    const { styles, children } = this.props;
    return (
      <div {...css(styles.overlay)}>
        <div {...css(styles.wrapper)}>
          <div {...css(styles.container)}>
            <Card vertical={2} horizontal={2}>
              {children}
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  children: PropTypes.node,
};

export default withStyles(() => ({
  overlay: {
    position: "fixed",
    zIndex: 9999,
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,.5)",
  },
  wrapper: {
    verticalAlign: "middle",
  },
  container: {
    margin: "40px auto 0px",
    width: 700,
  },
}))(Modal);
