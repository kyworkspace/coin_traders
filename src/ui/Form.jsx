import React from "react";
import PropTypes from "prop-types";

const { Provider, Consumer } = React.createContext({});

class FormProvider extends React.PureComponent {
  static Consumer = Consumer;
  static getDerivedStateFromProps({ initValues }, prevState) {
    const values =
      initValues !== prevState.initValues ? initValues : prevState.values;
    return {
      initValues,
      values,
      error: {},
    };
  }

  constructor(props) {
    super(props);
    this.state = {};
    this.reset = this.reset.bind(this);
    this.validate = this.validate.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    const { values, error } = this.state;
    e.preventDefault(); //뭐임?
    if (Object.values(error).length === 0) {
      this.props.onSubmit(values);
    }
  }

  onChange(name, updatedValue) {
    this.validate(this.state.values);
    this.setState(({ values }) => ({
      values: {
        ...values,
        [name]: updatedValue,
      },
    }));
  }

  reset() {
    this.setState({ values: {} });
  }
  validate(values) {
    const { validate } = this.props;
    if (!validate) {
      return;
    }
    const errors = this.props.validate(values);
    this.setState({ errors });
  }

  render() {
    const { values, errors } = this.state;
    return (
      <Provider
        value={{ errors, values, onChange: this.onChange, reset: this.reset }}
>
        <form onSubmit={this.handleSubmit}>{this.props.children}</form>
      </Provider>
    );
  }
}

FormProvider.propTypes = {
  validate: PropTypes.func,
};

FormProvider.defaultProps = {
  initValues: {},
  validate: () => ({}),
  onChange: () => ({}),
  handleSubmit: () => ({}),
  reset: () => ({}),
};

export default FormProvider;
