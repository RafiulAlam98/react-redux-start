import {
  decrement,
  increment,
  incrementByAmount,
} from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks/hooks";

function App() {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
  return (
    <>
      <div className="bg-red-400">
        <button className="red-300" onClick={() => dispatch(increment())}>
          Increment
        </button>
      </div>
      <div>{count}</div>
      <div className="bg-red-400">
        <button className="red-300" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </div>
      <div className="bg-red-400">
        <button
          className="red-300"
          onClick={() => dispatch(incrementByAmount(5))}
        >
          Increment
        </button>
      </div>
    </>
  );
}

export default App;
