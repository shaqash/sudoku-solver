export default function reducer(state, action) {
  switch (action.type) {
    case "SET":
      return state.map((row, rIndex) => {
        if (action.rIndex === rIndex) {
          return row.map((cell, cIndex) => {
            if (action.cIndex === cIndex) {
              return action.value;
            }
            return cell;
          });
        }
        return row;
      });
    default:
      return state;
  }
}
