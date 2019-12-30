export default function reducer(state = { counter: 0 }, action = {}) {
  const { counter } = state;
  const { type } = action;

  switch (type) {
    case 'INCREASE':
      return { counter: counter + 1 };
    case 'DECREASE':
      return { counter: counter - 1 };
    default:
      return { counter: 0 };
  }
}
