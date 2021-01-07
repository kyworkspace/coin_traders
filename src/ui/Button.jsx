import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles, css } from "./withStyles";

class Button extends Component {
  render() {
    const {
      children,
      disabled,
      styles,
      large,
      xlarge,
      small,
      xsmall,
      primary,
      secondary,
      type,
      onPress,
    } = this.props;
    return (
      <Button
        {...css(
          styles.default,
          xsmall && styles.xsmall,
          small && styles.small,
          large && styles.large,
          xlarge && styles.xlarge,
          secondary && styles.secondary,
          primary && styles.primary,
          disabled && styles.disabled
        )}
        disabled={disabled}
        onClick={onPress}
        type={type}
      >
        {children}
      </Button>
    );
  }
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  xsmall: PropTypes.bool,
  small: PropTypes.bool,
  large: PropTypes.bool,
  xlarge: PropTypes.bool,
  secondary: PropTypes.bool,
  primary: PropTypes.bool,
  type: PropTypes.string,
  onPress: PropTypes.func,
};
Button.defaultProps = {
  onPress: () => {}, //기본 선언으로 오류 방지
  xsmall: false,
  small: false,
  large: false,
  xlarge: false,
  secondary: false,
  primary: false,
};

export default withStyles(({ color, size, unit, depth, fontWeight }) => ({
  default: {
    ...depth.level1,
    border: 1,
    borderStyle: "solid",
    borderColor: color.default,
    borderRadius: unit,
    color: color.default,
    fontSize: size.md,
    fontWeight: fontWeight.bold,
    padding: unit * 2,
    paddingLeft: unit * 4,
    paddingRight: unit * 4,
    outline: 0,
    cursor: "pointer",
    ":hover": {
      backgroundColor: color.grayLight,
    },
    ":focus": {
      boxShadow: "0 0 0px 2px rgba(0,0,0,0.3)",
    },
  },
  primary: {
    borderColor: color.primary,
    color: color.white,
    backgroundColor: color.primary,
    ":hover": {
      backgroundColor: color.primaryDark,
    },
  },
  disabled: {
    borderColor: color.grayDark,
    color: color.grayLight,
    cursor: "default",
    opacity: 0.5,
    backgroundColor: color.gray,
    ":hover": {
      backgroundColor: color.gray,
    },
  },
  secondary: {
    borderColor: color.secondary,
    color: color.secondary,
  },
  xlarge: {
    fontSize: size.xg,
    padding: unit * 2.5,
  },
  large: {
    fontSize: size.lg,
    padding: unit * 2.5,
  },
  small: {
    fontSize: size.sm,
    padding: unit * 1.5,
  },
  xsmall: {
    fontSize: size.xs,
    padding: unit,
  },
}))(Button);
