export default function quizReducer(state, action) {
  switch (action.type) {
    case "VALIDATE":
      return state.map((q) =>
        q.id === action.id && !q.result
          ? { ...q, result: action.result }
          : q
      );
    default:
      return state;
  }
}

