import { useReducer } from "react";
import DigitButton from "./component/DigitButton";
import OperationButton from "./component/OperationButton";
import "./style/App.css";

export const ACTION = {
  ADD_DIGIT: "add-digit",
  CHOOSE_OPERATIOIN: "choose",
  CLEAR_DIGIT: "clear-digit",
  DELETE_DIGIT: "delete-digit",
  EVALUATE: "evaluate",
};

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTION.ADD_DIGIT:
      // limits the amount of 0 that can be used
      if (payload.digit === "0" && state.currentOperand === "0") {
        return state;
      }
      // limits the amount of periods that can be used
      if (payload.digit === "." && state.currentOperand.includes(".")) {
        return state;
      }
      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`,
      };
    case ACTION.CHOOSE_OPERATIOIN:
      // if theres nothing typed out, then it wont print anything
      if (state.currentOperand == null && state.currentOperand == null) {
        return state;
      }
      // if current operand has a number, but not a previous operand
      if (state.previousOperand == null) {
        return {
          ...state,
          operation: payload.operation,
          previousOperand: state.currentOperand,
          currentOperand: null,
        };
      }

    // returns an empty state, to have everything cleared
    case ACTION.CLEAR_DIGIT:
      return {};
  }
}

function App() {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  );

  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">
          {previousOperand} {operation}
        </div>
        <div className="current-operand">{currentOperand}</div>
      </div>
      <button
        className="spand-two"
        onClick={() => dispatch({ type: ACTION.CLEAR_DIGIT })}
      >
        AC
      </button>
      <button>DEL</button>
      <OperationButton operation={"÷"} dispatch={dispatch} />
      <DigitButton digit={"1"} dispatch={dispatch} />
      <DigitButton digit={"2"} dispatch={dispatch} />
      <DigitButton digit={"3"} dispatch={dispatch} />
      <OperationButton operation={"*"} dispatch={dispatch} />
      <DigitButton digit={"4"} dispatch={dispatch} />
      <DigitButton digit={"5"} dispatch={dispatch} />
      <DigitButton digit={"6"} dispatch={dispatch} />
      <OperationButton operation={"+"} dispatch={dispatch} />
      <DigitButton digit={"7"} dispatch={dispatch} />
      <DigitButton digit={"8"} dispatch={dispatch} />
      <DigitButton digit={"9"} dispatch={dispatch} />
      <OperationButton operation={"-"} dispatch={dispatch} />
      <DigitButton digit={"."} dispatch={dispatch} />
      <DigitButton digit={"0"} dispatch={dispatch} />
      <button className="spand-two">=</button>
      {/* button */}
    </div>
  );
}

export default App;
