import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { withStyles, css, withStylesPropTypes } from "./withStyles";
import Option from "./Option";

export { Option };

// Select 컴포넌트는 대부분 Option 컴포넌트를 포함하고 있으므로,
// Select 컴포넌트를 임포트할때
// Option 컴포넌트를 함께 참조할수 있도록 Option 컴포넌트를 익스포트함

class Select extends PureComponent {
  constructor(props) {
    super(props);
    this.setRef = this.setRef.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.state = {
      focused: false,
    };
  }
  handleFocus() {
    this.setState({ focused: true });
  }
  handleBlur() {
    this.setState({ focused: false });
  }
  handleChange() {
    const { name, onChange } = this.props;
    if (onChange) {
      onChange(name, e.target.value);
    }
  }

  componentDidMount() {
    if (this.props.autoFocus) {
      this.ref.focus();
    }
  }
  setRef() {
    this.ref = this.ref;
  }

  render() {
    const {
      children,
      disabled,
      errorMessage,
      label,
      value,
      name,
      styles,
      large,
      xlarge,
      small,
      xsmall,
    } = this.props;
    const { focused } = this.state;
    return (
      <fieldset {...css(styles.wrapper)}>
        <label
          htmlFor={`input_${name}`}
          {...css(styles.label, errorMessage && styles.errorLabel)}
        >
          {errorMessage || label}
        </label>
        <div
          {...css(
            styles.placeholder,
            xsmall && styles.xsmallPadding,
            small && styles.smallPadding,
            large && styles.largePadding,
            xlarge && style.xlargePadding,
            focused && styles.focus,
            errorMessage && styles.error
          )}
        >
          <select
            {...css(
              styles.select,
              xsmall && styles.xsmall,
              small && styles.small,
              large && styles.large,
              xlarge && style.xlarge
            )}
            disabled={disabled}
            id={`input_${name}`}
            ref={this.setRef}
            onChange={this.handleChange}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            value={value}
          >
            {React.Children.map(childre, (child) =>
              React.cloneElement(child, { disabled })
            )}
          </select>
        </div>
      </fieldset>
    );
  }
}

Select.propTypes = {
  ...withStylesPropTypes,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  errorMessage: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  autoFocus: PropTypes.bool,
};

Select.defaultProps = {
  onChange: () => {},
  autoFocus: false,
};

export default withStyles(({ depth, unit, color, size, lineHeight }) => ({
  wrapper: {
    border: 0,
    padding: 0,
    position: "relative",
  },
  label: {
    display: "block",
    fontSize: size.xs,
    top: 2,
    left: unit * 2,
    cursor: "pointer",
  },
  placeholder: {
    marginTop: 2,
    border: 1,
    borderColor: color.primary,
    borderRadius: 4,
    padding: unit * 1.5,
  },
  focus: {
    boxShadow: "0 0 0px 2px rgba(0, 0, 0, 0.3)",
  },
  xlargePadding: {
    padding: unit * 2,
  },
  largePadding: {
    padding: unit * 2,
  },
  smallPadding: {
    padding: unit - 1,
  },
  select: {
    fontSize: size.md,
    lineHeight: lineHeight.md,
    backgroundColor: color.white,
    border: 0,
    outline: 0,
    width: "100%",
  },
  xlarge: {
    fontSize: size.xg,
  },
  large: {
    fontSize: size.lg,
  },
  small: {
    fontSize: size.sm,
  },
  errorLabel: {
    color: color.error,
  },
  error: {
    borderColor: color.error,
  },
}))(Select);