/* eslint-disable react-refresh/only-export-components */
import { createContext, useReducer } from "react";
import quizData from "../data/quizData";
import quizReducer from "../reducers/quizReducer";

export const QuizContext = createContext();

export function QuizProvider({ children }) {
  const [state, dispatch] = useReducer(quizReducer, quizData);

  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
}
