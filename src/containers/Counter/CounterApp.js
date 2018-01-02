import { connect } from "react-redux";
import { decrement, increment } from "../../actions/counterActions";
import Counter from "../../components/Counter/Counter";

const mapStateToProps = state => {
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementClick: () => {
      dispatch(increment(1));
    },
    onDecrementClick: () => {
      dispatch(decrement(1));
    },
  };
};

const CounterApp = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);

export default CounterApp;
