import { connect } from "react-redux";

import App from "./../components/app.jsx";
import {
  increaseAction,
  decreaseAction,
  resetAction
} from "./../actions/counter.jsx";

// mapStateToProps用户自己定义需要的状态
const mapStateToProps = state => ({ counter: state.counter });

const mapDispatchToProps = dispatch => ({
  onIncreaseHandle: () => dispatch(increaseAction),
  onDecreaseHandle: () => dispatch(decreaseAction),
  onResetHandle: () => dispatch(resetAction)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
